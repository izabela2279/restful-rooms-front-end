import styles from './ReservationCard.module.css'

const ReservationCard = ({ reservation }) => {
  return (
    <article className={styles.container}>
      <header>
      </header>
      <p>{reservation.dateCheckIn}</p>
      <p>{reservation.dateCheckOut}</p>
      <p>{reservation.guests}</p>
    </article>
  )
}

export default ReservationCard