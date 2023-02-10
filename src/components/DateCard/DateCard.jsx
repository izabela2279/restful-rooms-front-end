

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <div >
      {/* <Icon category="Calendar" /> */}
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard