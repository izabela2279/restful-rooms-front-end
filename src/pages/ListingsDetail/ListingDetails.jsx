import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

//Services
import * as listingService from "../../services/listingService"



const ListingDetails = (props) => {
    const { id } = useParams()
    return (
        <main>
            Details
        </main>
    )
}

export default ListingDetails