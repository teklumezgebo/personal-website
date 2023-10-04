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
              <br/>
              <p>You can check it out <a href="https://github.com/teklumezgebo/Random-Brewery-Generator">here</a>.</p>
              <br/>
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
                Moving further into the bootcamp I became more comfortable with JavaScript, HTML, and CSS. It was time to dig a little deeper and learn my first framework/library, React! From the start
                I really enjoyed using React. There was a little bit of a learning curve when it came to handling state and knowing best practices when it came to state and props, but once I started to understand
                things really started to click for me. With my next project I used my newly aquired skills and created a productivity app that allows users to keep track of all of their tasks and log journal entries
                to keep track of their thoughts. Althoug not a very complex project, this project really helped solidify my knowledge with React and its features like state management, prop handling, and routing. 
              </p>
              <br/>
              <p>You can check it out <a href="https://github.com/teklumezgebo/Productivity-Hub">here</a>.</p>
              <br/>
              <iframe width="440" height="315" src="https://www.youtube.com/embed/gRF7mtIanWc?si=OkwoQ4bY0wHNICnR" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
