import UserInfo from "../UserInfo/UserInfo"

const ReviewCard = ({ review, id, handleDeleteReview, user }) => {
  return (
    <article>
      <header>
        <UserInfo content={review} />
        <button onClick={() => handleDeleteReview(id, review._id)}>
          DELETE
        </button>
      </header>
      <p>{review.text}</p>
      <p>{review.rating}</p>
    </article>
  )
}

export default ReviewCard