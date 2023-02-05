import { Link } from "react-router-dom"
import styles from './ListingCard.module.css'

// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{listing.title}</h1>
            <h2>{listing.location}</h2>
            <h2>{listing.photo}</h2>
          </span>
          {/* <AuthorInfo content={listing} /> */}
        </header>
        <p>{listing.description}</p>
        <p>{listing.bedrooms}</p>
        <p>{listing.beds}</p>
        <p>{listing.baths}</p>
        <p>{listing.guests}</p>
        <p>{listing.reviews}</p>
        <p>{listing.reservations}</p>
        <p>{listing.activities}</p>
      </article>
    </Link>
  )
}

export default ListingCard