import style from './Landing.module.css'

const Landing = () => {

  return (
    <main className={style.container}>
      <div id="welcome">
        <h1> A place you can find your home away from home or share you home to weary engineers. </h1>

        <h2> </h2>
      </div>
      <div id="landing-image">
        <img id="landing-image" src='assets/Landing/landing-pic1.jpeg' alt='landing-page'></img>
      </div>

    </main>
  )
}

export default Landing
