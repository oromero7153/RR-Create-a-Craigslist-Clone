import Item from './Item'
import { postings } from '../postings.js'

export default function Gallery() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {postings.map((posting, index) => <Item key={index} description={posting.description} imageURL={posting.imageURL} price={posting.price} title={posting.title} />)}
        </div>
    )
}