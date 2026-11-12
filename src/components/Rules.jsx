import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const rm = new Map()
rm.set("Genestealer Cults", "https://assets.warhammer-community.com/eng_22-07_warhammer_40,000_faction_pack_genestealer_cults-vmkwgeydbr-sh7picbeqo.pdf")
rm.set("Adepta Sororitas", "https://assets.warhammer-community.com/eng_14-10_wh40k_-faction_pack_adepta_sororitas-kby0nywexj-dg7kvr3iiy.pdf")
rm.set("Adeptus Mechanicus", "https://assets.warhammer-community.com/eng_14-10_wh40k_-faction_pack_adeptus-mechanicus-g0jwiuyz3x-f5itnst9j9.pdf")
rm.set("Adeptus Custodes", "https://assets.warhammer-community.com/eng_14-10_wh40k_printed_product_updates_adeptus_custodes_updates-fmj4bdwwhh-0qshh8eauk.pdf")
rm.set("Agents of the Imperium", "https://assets.warhammer-community.com/eng_14-10_wh40k_-faction_pack_imperial_agents-5bv5lemlti-phvkqckp17.pdf")
rm.set("Leagues if Votann", "https://assets.warhammer-community.com/eng_14-10_wh40k_faction_pack_leagues_of_votann-os3nsdjlao-buac8a7pzn.pdf")
rm.set("Tyranids", "https://assets.warhammer-community.com/eng_14-10_wh40k_faction_pack_tyranids-an12izciwp-np2hnkcsje.pdf")
rm.set("Space Marines", "https://assets.warhammer-community.com/eng_14-10_wh40k_printed_product_updates_space_marines_updates-91hillwcff-wzs8qnozam.pdf")
rm.set("Aeldari", "https://assets.warhammer-community.com/eng_14-10_wh40k_-faction_pack_aeldari-seqmcs1mu0-g8gzewikcm.pdf")
rm.set("Death Guard", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_death_guard-bp5c8lcjq6-i4ew7urwyk.pdf")
rm.set("Thousand Sons", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_thousand_sons-4lioijwxdj-otjrinzt8c.pdf")
rm.set("Astra Militarum", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_astra_militarum-1hevkhdpmv-stfkch2tsz.pdf")
rm.set("Daemons", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_chaos_daemons-e67vyzvv3x-mownb49uc3.pdf")
rm.set("World Eaters", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_world_eaters-rxxj1fzeoh-kfx1cectxb.pdf")
rm.set("Necrons", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_necrons-1urphgbmpy-wbhocjbaba.pdf")
rm.set("Grey Knights", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_grey_knights-jnrahwb1qf-ubjtmdlivm.pdf")
rm.set("Emperor's Children", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_emperors_children-xp2mhzppxs-1cvykicdxu.pdf")
rm.set("Chaos Space Marines", "https://assets.warhammer-community.com/eng_30-09_wh40k_faction_pack_chaos_space_marines-xlmrglqa2b-zd2fzntrqu.pdf")
rm.set("Chaos Knights", "https://assets.warhammer-community.com/eng_wh40k_faction_pack_chaos_knights-87ywk2jovh-xk68yzyb18.pdf")
rm.set("Imperial Knights", "https://assets.warhammer-community.com/eng_wh40k_faction_pack_imperial_knights-n1irjnjygs-w8jfnk8kdn.pdf")
rm.set("T'au Empire", "https://assets.warhammer-community.com/eng_wh40k_faction_pack_tau_empire-sxhzmfrlud-mpzjzuhupn.pdf")
rm.set("Titans", "https://assets.warhammer-community.com/eng_22-07_warhammer_40,000_faction_pack_adeptus_titanicus-pkhrobh6xn-nmtoszeaxw.pdf")

function Rules(){
    return(
        <div>
            <div>
            <Card bg='dark' text='light' >
                <Card.Body>
                    <Card.Title>Core rules</Card.Title>
                    <Button variant='danger' href="https://assets.warhammer-community.com/eng_01-06_warhammer40k_new40k_core_rules-was6fbu1ix-hfewhmxyiy.pdf"> Core rules: PDF</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>
                {[...rm].map(([faction, url], i) => (
                    <div className='col' key={i}>
                        <Card bg='dark' text='light' className='h-100'>
                            <Card.Body>
                                <Card.Title>{faction} specific rules</Card.Title>
                                <Button variant='danger' href={url}>PDF</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rules