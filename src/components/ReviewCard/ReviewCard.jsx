import UserInfo from "../UserInfo/UserInfo"

const ReviewCard = ({ review }) => {
  return (
    <article>
      <header>
        <UserInfo content={review} />
      </header>
      <p>{review.text}</p>
    </article>
  )
}

export default ReviewCard