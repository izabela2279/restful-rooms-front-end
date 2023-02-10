import style from './Landing.module.css'

const Landing = () => {
  
  return (
    <main className={ style.container}>
      <div id="welcome">
      <h1> A place where you can find your home away from home. 
      Offer and find your <b style={{color:"blue"}}>restfulRooms </b>here. </h1>

    
      </div>
      <div id="landing-image">
        <img  id="landing-image"src='assets/Landing/landingfinal.png'></img>
      </div>
     
    </main>
  )
}

export default Landing
