import Image from "next/image"
import blackcircle from './images/circle.png'

export default function Home() {
  return (
    
      <body>
        <h1 className="title">Teklu Mezgebo | Full Stack Web Developer</h1>
        <div className="timeline">
          
          <div className="container left-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>How did I end up here?</h2>
              <small>October 2022</small>
              <p>
                Late 2022 I decided to alter my path and give up my aspirations of going to medical school. I learned over time it wasn't something I was passionate about
                which lead me to start my current journey! I decied to enroll in Flatiron School's Software Engineering bootcamp and pursue a career in web development 
                instead as my curiosity for programming and the fundamentals behind it grew the more I learned about it.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>Learning, learning, learning...</h2>
              <small>February 2023</small>
              <p>Sameple text</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2></h2>
              <small>year - year</small>
              <p>Sameple text</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>The start</h2>
              <small>year - year</small>
              <p>Sameple text</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>The start</h2>
              <small>year - year</small>
              <p>Sameple text</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>


        </div>
      </body>
  )
}
