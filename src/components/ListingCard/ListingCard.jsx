import { Link } from "react-router-dom"
import styles from './ListingCard.module.css'

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{listing.title}</h1>
            <h2>{listing.location}</h2>
            <img alt="" src={listing.photo}/>
          </span>
        </header> 
      </article>
    </Link>
  )
}

export default ListingCard