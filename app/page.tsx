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
              <p>
                Once I got a good grasp of JavaScript I went ahead and made my first ever project. I decided to make something that I know people around me could use. Albeit the group
                is a little niche, but where I am from breweries are very popular and it seemed like there was always a conversation about what new brewery people should try. So that 
                led me to try and find a solution. What I did was create a SPA that allowed users to serve up 5 random breweries across the US utilizing plain old JavaScript, HTML, and CSS. 
              </p>
              <br></br>
              <p>You can check it out here: <a href="https://github.com/teklumezgebo/Random-Brewery-Generator">Github</a></p>
              <br></br>
              <p>Here's a demo as well 🙂</p>
              <br></br>
              <iframe width="440" height="315" src="https://www.youtube.com/embed/lRaIQAyyoow?si=9QADSlydrk_AJRlR" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>Getting the hang of things.</h2>
              <small>April 2023</small>
              <p>
                Moving further int
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2></h2>
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
