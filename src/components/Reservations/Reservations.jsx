import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = (props) => {
    return(
        <>
        {props.reservations.map((reservations) => (
            <ReservationCard
            key= {reservations._id}
            reservation={reservation}
            user={props.user}
            />
        ))}
        </>
    )
}

export default Reservations