const ReservationCard = ({ reservations }) => {
  return (
    <article>
      <p>{reservations.date}</p>
      <p>{reservations.guests}</p>
    </article>
  )
}

export default ReservationCard