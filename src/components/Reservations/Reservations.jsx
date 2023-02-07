import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = (props) => {
    if (!props.reservations) return <h4>No Reservation</h4>
    return(
        <>
        {props.reservations.map((reservation) => (
            <ReservationCard
            key= {reservation._id}
            reservation={reservation}
            user={props.user}
            />
        ))}
        </>
    )
}

export default Reservations