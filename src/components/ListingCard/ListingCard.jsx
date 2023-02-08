import { Link } from "react-router-dom"
import styles from './ListingCard.module.css'

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing._id}`} style={{textDecoration: 'none', color: "black" }}>
      <article  className={styles.container}>
       
          
           <img id='card-pic' src={listing.photo} style={{ objectFit:'cover',width: 277.33, height:263.45, borderRadius: 17 }} />
           <span >
            <h1>{listing.title}</h1>
            <p id="local" style ={{color:'gray'}}>{listing.location}</p>
            <p>$<b>{listing.price}</b> per night</p>
            
          </span>
       
      </article>
    </Link>
  )
}

export default ListingCard