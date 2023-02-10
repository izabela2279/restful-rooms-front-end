import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import NewReview from "../../components/NewReview/NewReview";
import NewActivity from "../../components/NewActivity/NewActivity";
import Activities from "../../components/Activities/Activities";
import Reviews from "../../components/Reviews/Reviews";
import NewReservation from "../../components/NewReservation/NewReservation";
import Reservations from "../../components/Reservations/Reservations";
import styles from './ListingDetails.module.css'
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


//Services
import * as listingService from "../../services/listingService";

const ListingDetails = (props) => {
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

    if (!listing) return <h1>Loading</h1>

    return (
        <>
            <main className={styles.container} >
                <div id="top" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1>{listing.title}</h1>

                    <span style={{ display: "flex", justifyContent: "center", gap: 5 }}>

                        {listing.author._id === props.user.profile &&
                            <>
                                <Link to={`/listings/${id}/edit`} state={listing}> <h2><FontAwesomeIcon icon={faEdit} /></h2>
                                </Link>
                                <button style={{ width: 70, height: 70, alignItems: "center" }} onClick={() => props.handleDeleteListing(id)}>
                                    <h2><FontAwesomeIcon icon={faTrash} /></h2>
                                </button>
                            </>
                        }
                    </span>
                </div>
                <img alt="" src={listing.photo} />
                <h2>{listing.guests} guests . {listing.bedrooms} bedrooms . {listing.beds} beds . {listing.baths} baths</h2>
                <div className="resDev" style={{ display: 'flex', justifyContent: 'space-between', gap: 100 }}>
                    <div id='description'>
                        <p>{listing.description}</p>
                    </div>

                    <section>
                        <h1>Reservations  <FontAwesomeIcon icon={faEnvelope} /></h1>
                        <NewReservation handleAddReservation={handleAddReservation} />
                        <Reservations reservations={listing.reservations} user={props.user} />
                    </section>
                </div>

                <div>
                    <h2>{listing.amenities}</h2>
                    <ul>
                        <li>FEZIBO Height Adjustable Electric Standing desk.</li>
                        <li>ZettaGuard HDMI 3×1 switch x 2 </li>
                        <li>UGREEN USB switch</li>
                        <li>Acer 27 inch monitors x 3</li>
                        <li>Logitech webcam </li>
                        <li>HeadsetAfterShokz Bluetooth headset</li>
                        <li>Google Home Mini pair</li>
                        <li>Lenovo keyboard and mouse</li>
                        <li>an Anker USB-C Wall Charger, Premium 60W 5-Port Desktop Charger—4 USB 3.0 + 1 USB-C on one charger</li>
                        <li>Herman Miller embody ergonomic office chair</li>
                        <li>Standing mat</li>
                        <li>Phone Chargers android and apple compatible</li>
                    </ul>
                </div>

                <section>
                    <h1>Review  </h1>
                    <NewReview handleAddReview={handleAddReview} />
                    <Reviews
                        reviews={listing.reviews}
                        user={props.user}
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