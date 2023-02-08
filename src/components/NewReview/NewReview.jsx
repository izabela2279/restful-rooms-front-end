import { useState } from "react"
import styles from './NewReview.module.css'

// Components

const NewReview = (props) => {
  const [form, setForm] = useState({})

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
      <button type="submit">Create</button>
    </form>
  )
}

export default NewReview








