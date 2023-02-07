import { useState } from "react"
import styles from './NewReservation.module.css'

const NewReservation = (props) => {
    const [form, setForm] = useState({ text: '' })

    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddReservation(form)
        setForm({ text: '' })
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <label htmlFor="text-input">Date</label>
            <input
                required
                type="date"
                name="date"
                id="price-input"
                value={form.date}
                placeholder="Date"
                onChange={handleChange}
            />
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
            <button type="submit">Create</button>
        </form>
    )
}

export default NewReservation