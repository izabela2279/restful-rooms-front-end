import { useState } from "react"
import styles from './NewListing.module.css'

const NewListing = (props) => {
  const [form, setForm,] = useState({
    title: '',
    location: '',
    price: '',
    photo: '',
    description: '',
    bedrooms: 1,
    beds: 1,
    baths: 1,
    guests: 1,
    amenities: 'Dev Tools'
  })
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }
  const [photoData, setPhotoData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddListing(form, photoData.photo)
  }
  const handleChangePhoto = evt => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div id="input" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="title-input"></label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            value={form.title}
            placeholder="Title"
            onChange={handleChange}
          />
          <label htmlFor="text-input"></label>
          <input
            required
            type="text"
            name="location"
            id="location-input"
            value={form.location}
            placeholder="Location"
            onChange={handleChange}
          />
          <label htmlFor="text-input"></label>
          <input
            required
            type="text"
            name="price"
            id="price-input"
            value={form.price}
            placeholder="Price"
            onChange={handleChange}
          />
          <label htmlFor="text-input"></label>
          <textarea
            required
            type="text"
            name="description"
            id="description-input"
            value={form.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div id="select">
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
          <label htmlFor="category-input">Amenities</label>
          <select
            required
            name="amenities"
            id="amenities-input"
            value={form.amenities}
            onChange={handleChange}
          >
            <option input="1">
              Dev Tools
            </option>
          </select>
          <div className="form-group mb-4">
            <label htmlFor="photo-upload" className="form-label">
              Upload Photo
            </label>
          </div>
          <input
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            multiple onChange={handleChangePhoto}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewListing