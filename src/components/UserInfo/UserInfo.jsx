// import ProfileIcon from '../../assets/icons/profile.png'

const UserInfo = ({ content }) => {
  // const photo = content.author.photo ? content.author.photo : ProfileIcon
  return (
    <div>
      {/* <img src={photo} alt="The user's avatar" /> */}
      <section>
        <h4>{content.author.name}</h4>
      </section>
    </div>
  )
}

export default UserInfo

