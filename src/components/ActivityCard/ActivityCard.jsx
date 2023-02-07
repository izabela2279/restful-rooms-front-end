import UserInfo from "../UserInfo/UserInfo"

const ActivityCard = ({ activity }) => {
  return (
    <article>
      <header>
        <UserInfo content={activity} />
      </header>
      <p>{activity.text}</p>
    </article>
  )
}

export default ActivityCard