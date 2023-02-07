import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = (props) => {
    return(
        <>
        {props.reservations && props.reservations.map((reservations) => (
            <ReservationCard
            key= {reservations._id}
            reservations={reservations}
            user={props.user}
            />
        ))}
        </>
    )
}

export default Reservations