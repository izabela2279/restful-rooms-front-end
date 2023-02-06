import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import styles from './ListingDetails.module.css'



//Services
import * as listingService from "../../services/listingService";




const ListingDetails = (props) => {
    const { id } = useParams()
    const [listing, setListing] = useState([])
    useEffect(() => {
        const fetchListing = async () => {
            const data = await listingService.show(id)
            setListing(data)
        }
        fetchListing()
    }, [id])




    return (
        <>
            <main >

                <h1>{listing.title}</h1>
                {listing.photo}
                <p>{listing.bedrooms} {listing.beds} {listing.baths}{listing.guests}</p>
                <p>{listing.description}</p>
            </main>

        </>
    )
}

export default ListingDetails