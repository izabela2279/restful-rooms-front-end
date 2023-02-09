import UserInfo from "../UserInfo/UserInfo"

const ReviewCard = ({ review, listingId, handleDeleteReview, user }) => {
  return (
    <article>
      <header>
        <UserInfo content={review} />
        <button onClick={() => handleDeleteReview(listingId, review._id)}>
          DELETE
        </button>
      </header>
      <p>{review.text}</p>
    </article>
  )
}

export default ReviewCard