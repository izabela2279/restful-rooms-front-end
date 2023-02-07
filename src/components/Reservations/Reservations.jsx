import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = (props) => {
    return(
        <>
        {props.reservations.map((reservations) => (
            <ReservationCard
            key= {reservations._id}
            reservation={reservations}
            user={props.user}
            />
        ))}
        </>
    )
}

export default Reservations