import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const UserInfo = ({ content }) => {
  
  return (
    <div>
     
      {content.author.photo ?
        <img src={content.author.photo} alt="The user's avatar" />:
         <FontAwesomeIcon icon={faUser} />}
      <section>
        <h4>{content.author.name}</h4>
      </section>
    </div>
  )
}

export default UserInfo

