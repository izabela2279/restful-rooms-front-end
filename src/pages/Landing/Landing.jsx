import style from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  
  return (
    <main className={ style.container}>
      <div id="welcome">
      <h1> A place where you can find your home away from home. 
      Offer and find your <b style={{color:"blue"}}>restfulRooms </b>here. </h1>
      <h2>Newcomers start here..</h2>
      <Link to="/signup"><button style={{ backgroundColor: "blue", width:300, color:"white", fontSize:20, borderRadius:20}}> Sign Up</button></Link>
    
      </div>
      <div id="landing-image">
        <img  id="landing-image"src='assets/Landing/landingfinal.png'></img>
      </div>
     
    </main>
  )
}

export default Landing
