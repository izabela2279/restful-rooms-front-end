import { useState } from "react"
import styles from './NewReservation.module.css'

const NewReservation = (props) => {

    const [form, setForm] = useState({ dateCheckIn: '', dateCheckOut: '', guests: 1 })

    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddReservation(form)
        setForm({ dateCheckIn: '', dateCheckOut: '', guests: 1 })
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <label htmlFor="text-input">Check-In Date</label>
            <input
                required
                type="date"
                name="dateCheckIn"
                id="dateCheckIn-input"
                value={form.dateCheckIn}
                placeholder="Date"
                onChange={handleChange}
            />
            <label htmlFor="text-input">Check-Out Date</label>
            <input
                required
                type="date"
                name="dateCheckOut"
                id="checkOut-input"
                value={form.dateCheckOut}
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
            <button type="submit">RESERVE</button>
        </form>
    )
}

export default NewReservation