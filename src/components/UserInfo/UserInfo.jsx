import styles from './UserInfo.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const UserInfo = ({ content }) => {
  
  return (
    <div className={styles.container}>
     
      {content.author.photo ?
        <img style={{ width:50, height:50, objectFit:'cover', borderRadius: 50}}src={content.author.photo} alt="The user's avatar" />:
         <FontAwesomeIcon icon={faUser} />}
      <section>
        <h4>{content.author.name}</h4>
      </section>
    </div>
  )
}

export default UserInfo

