const ReservationCard = ({ reservation }) => {
  return (
    <article>
      <header>
       
      </header>
      <p>{reservation.dateCheckIn}</p>
      <p>{reservation.dateCheckOut}</p>
      <p>{reservation.guests}</p>
    </article>
  )
}

export default ReservationCard