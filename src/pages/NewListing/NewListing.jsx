import { useState } from "react"
import styles from './NewLising.module.css'

const NewListing = (props) => {
  const [form, setForm] = useState({
    title: '',
    location: '',
    price:'',
    description: '',
    bedrooms: 0,
    beds: 0,
    baths: 0,
  })

 return (
    <>
    </>
 )
}

 export default NewListing