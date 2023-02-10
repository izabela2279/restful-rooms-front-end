import styles from './UserInfo.module.css'
import DateCard from '../DateCard/DateCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const UserInfo = ({ content }) => {

  return (
    <div className={styles.container} style={{ display: 'flex', flexDirection: 'row', margin: 0, gap: 20 }}>
      {content.author.photo ?
        <img style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 50 }} src={content.author.photo} alt="The user's avatar" /> :
        <h1> <FontAwesomeIcon icon={faUser} /></h1>}
      <section style={{ display: 'flex', flexDirection: "column", justifyContent: "flex-start", margin: 0, opacity: .75 }}>
        <h4 style={{ height: 0, margin: 5 }}>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default UserInfo

