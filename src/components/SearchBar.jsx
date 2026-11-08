import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useFormStatus } from 'react-dom'
import {useState} from 'react'

function SearchBar(props) {
    const { pending } = useFormStatus()
    const [faction, setFaction] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(faction)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input name='query' />
            <Button type='submit' disabled={pending}>
                {pending ? 'Searching...' : 'Search'}
            </Button>
            <Form.Select
                id='choice'
                value='faction'
                onChange={(e) => setFaction(e.target.value)}
            >
                <option value=''>Choose faction</option>
                {props.factionInfo.map((faction, i) => <option key={i} value={faction.name}>{faction.name}</option>)}
            </Form.Select>
        </Form>
    )
}
export default SearchBar