import { useState } from "react"
import styles from './NewReview.module.css'

// Components

const NewReview = (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(form)
    setForm({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="Add a Review"
        onChange={handleChange}
      />
      <label htmlFor="rating-input">Rating</label>
        <select
          required
          name="rating"
          id="rating-input"
          value={form.rating}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      <button type="submit">Create</button>
    </form>
  )
}

export default NewReview








