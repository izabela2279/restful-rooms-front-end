// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ActivityCard = ({ activity }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={activity} />
      </header>
      <p>{activity.text}</p>
    </article>
  )
}

export default ActivityCard