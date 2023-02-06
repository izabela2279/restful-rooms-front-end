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
        <div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div> 
      </article>
    </Link>
  )
}

export default ListingCard