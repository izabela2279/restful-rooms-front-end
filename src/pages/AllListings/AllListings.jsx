import styles from './AllListings.module.css';
import ListingCard from '../../components/ListingCard/ListingCard';

const AllListings = (props) => {
    return (
        <main className={styles.main} >
            <div className={styles.container}>
                {props.listings.map((listing) => (
                    <ListingCard key={listing._id} listing={listing} />
                ))}
            </div>
        </main>
    )
}

export default AllListings