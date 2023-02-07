import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditListing.module.css'

const EditListing = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateListing(form)
  }  

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Location</label>
        <input
          required
          type="text"
          name="location"
          id="location-input"
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Price</label>
        <input
          required
          type="text"
          name="price"
          id="price-input"
          value={form.price}
          placeholder="Price"
          onChange={handleChange}
        />
         <label htmlFor="text-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Bedrooms</label>
        <select
          required
          name="bedrooms"
          id="bedrooms-input"
          value={form.bedrooms}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        
        <label htmlFor="category-input">Beds</label>
        <select
          required
          name="beds"
          id="beds-input"
          value={form.beds}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        
        <label htmlFor="category-input">Baths</label>
        <select
          required
          name="baths"
          id="baths-input"
          value={form.baths}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        
        <label htmlFor="category-input">Guests</label>
        <select
          required
          name="guests"
          id="guests-input"
          value={form.guests}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditListing