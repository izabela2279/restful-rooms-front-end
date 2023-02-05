import styles from './AllListings.module.css';

const AllListings = (props) => {
    return (
        <main className ={styles.container}>
            {props.listings.map((listing) => (
                <p key={listing._id}>
                    {listing.title}
                </p>
            ))}
        </main>
    )
}

export default AllListings