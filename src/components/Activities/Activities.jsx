import ActivityCard from "../ActivityCard/ActivityCard"

const Activities = (props) => {
  if (!props.activities) return <h4>No Activities</h4>

  return (
    <>
      {props.activities.map((activity) => (
        <ActivityCard
          key={activity._id}
          activity={activity}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Activities