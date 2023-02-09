import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import NewReview from "../../components/NewReview/NewReview";
import NewActivity from "../../components/NewActivity/NewActivity";
import Activities from "../../components/Activities/Activities";
import Reviews from "../../components/Reviews/Reviews";
import NewReservation from "../../components/NewReservation/NewReservation";
import Reservations from "../../components/Reservations/Reservations";
import styles from './ListingDetails.module.css'

//Services
import * as listingService from "../../services/listingService";

const ListingDetails = (props) => {
    console.log(props)
    const { id } = useParams()
    const [listing, setListing] = useState(null)
    useEffect(() => {
        const fetchListing = async () => {
            const data = await listingService.show(id)
            setListing(data)
        }
        fetchListing()
    }, [id])

    const handleAddReview = async (reviewData) => {
        const newReview = await listingService.createReview(id, reviewData)
        setListing({ ...listing, reviews: [...listing.reviews, newReview] })
    }

    const handleAddActivity = async (activityData) => {
        const newActivity = await listingService.createActivity(id, activityData)
        setListing({ ...listing, activities: [...listing.activities, newActivity] })
    }

    const handleAddReservation = async (reservationData) => {
        const newReservation = await listingService.createReservation(id, reservationData)
        setListing({ ...listing, reservations: [...(listing.reservations || []), newReservation] })
    }

    const handleDeleteReview = async (listingId, reviewId) => {
        await listingService.deleteReview(listingId, reviewId)
        setListing({ ...listing, reviews: listing.reviews.filter((c) => c._id !== reviewId) })
    }


    console.log('Listing data', listing)
    if (!listing) return <h1>Loading</h1>
    
    return (
        <>
            <main className ={styles.container} >
                <h1>{listing.title}</h1>
                <img alt="" src={listing.photo} />
                <h2>{listing.guests} guests . {listing.bedrooms} bedrooms . {listing.beds} beds . {listing.baths} baths</h2>
                <div className="resDev" style={{ display: 'flex', justifyContent:'space-between', gap:100 }}>
                <div id='description'>
                <p>{listing.description}</p>
                </div>
                
                <section>
                <h1>Reservations</h1>
                <NewReservation handleAddReservation={handleAddReservation} />
                <Reservations reservations={listing.reservations} user={props.user} />
                </section>
                </div>
                <p>{listing.amenities}</p>

                

            <span>
            {/* <AuthorInfo content={listing} /> */}

            {listing.author._id === props.user.profile &&
            <>
                <Link to={`/listings/${id}/edit`} state={listing}>Edit</Link>
                <button onClick={() => props.handleDeleteListing(id)}>Delete</button>
            </>
            }
            </span>   
            <section>
                <h1>Review</h1>
                <NewReview handleAddReview={handleAddReview} />
                <Reviews 
                    reviews={listing.reviews} 
                    user={props.user} 
                    handleDeleteReview = {handleDeleteReview} 
                    />
            </section>
         
            <section>
                <h1>Activities</h1>
                <NewActivity handleAddActivity={handleAddActivity} />
                <Activities activities={listing.activities} user={props.user} />
            </section>  
            </main>
        </>
    )
}

export default ListingDetails