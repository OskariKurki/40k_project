import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

function SearchBar(props) {
    const [faction, setFaction] = useState('')
    const [search, setSearch] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const query = String(formData.get('query') ?? '').trim()
        if (query=='' && faction==''){
            setSearch('')
        }
        else if (query!='' && faction!=''){
            const edited = faction.replace(" ", "%20")
            setSearch(`&name=${query}&faction=${edited}`)
        }
        else if (query!=''){
            setSearch(`&name=${query}`)
        }
        else {
            const edited = faction.replace(" ", "%20")
            setSearch(`&faction=${edited}`)
        }
    }

    useEffect(() => {
        const getData = async() => {
            try {
            const res = await fetch(`${props.url}/v1/${props.edition}/units?limit=100${search}`)
            if (!res.ok) throw new Error(`Request failed: ${res.status}`)
            const data = await res.json()
            props.setUnits(data)
        } catch (err) {
            props.setError(err.message)
        } finally {
            props.setLoading(false)
        }
    }
    getData()
    }, [search])


    if (props.loading) return (
        <div>
        <Spinner>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
        </div>
    )

    if (props.error) return (
        <Alert>
        {props.error}
        </Alert>
    )

    return (
        <Form onSubmit={handleSubmit}>
            <input name='query' />
            <Button type='submit'>
                search
            </Button>
            <Form.Select
                id='choice'
                value={faction}
                onChange={(e) => setFaction(e.target.value)}
            >
                <option value=''>Choose faction</option>
                {props.factionInfo.map((faction, i) => <option key={i} value={faction.name}>{faction.name}</option>)}
            </Form.Select>
        </Form>
    )
}
export default SearchBar