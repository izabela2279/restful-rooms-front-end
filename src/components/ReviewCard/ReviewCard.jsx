import UserInfo from "../UserInfo/UserInfo"

const ReviewCard = ({ review }) => {
  console.log(review);
  return (
    <>
    <article>
      <header>
        <UserInfo content={review} />
      </header>
      <p> {review.text}</p>
    </article>
    </>
  )
}

export default ReviewCard