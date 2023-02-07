import { useState } from "react"
import styles from './NewActivity.module.css'

const NewActivity= (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddActivity(form)
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
        placeholder="Add a Activity"
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  )
}

export default NewActivity