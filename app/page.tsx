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
                things really started to click for me. With my next project I used my newly aquired skills and created a productivity app that allows users to manage their tasks and log journal entries
                to keep track of their thoughts. Althoug not a very complex project, this project really helped solidify my knowledge with React and its features like state management, prop handling, and routing. 
              </p>
              <br/>
              <p>You can check it out <a href="https://github.com/teklumezgebo/Productivity-Hub">here</a>.</p>
              <br/>
              <iframe width="440" height="315" src="https://www.youtube.com/embed/gRF7mtIanWc?si=OkwoQ4bY0wHNICnR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>Bringing it all together.</h2>
              <small>June 2023</small>
              <p>
                Moving further along in my journey I felt more and more comfortable with my frontend skills with two projects under my belt. It was time to push my limits and learn how to build out backends
                in order to create fullstack applications. Starting out I learned about Ruby, Sinatra, SQLite, and Object Oriented Programming. Coming from JavaScript I was unsure about how well I'd be able to adapt to a new language but after some
                practice and exposure I started to get the hang of it. Sinatra is a lightweight framework that allowed me to understand how RESTful API's work. Along with that SQLite was also a great database to use to understand
                how data is stored and manipulated as well as understanding how one-to-many relationships work. Using these new skills I created a database that lets users store patients, clinicians, blood pressures, blood sugars, and even 
                clinics. I was proud about incorporating a little bit of my healthcare background into this project, can't forget our roots!
              </p>
              <br/>
              <p>You can check it out <a href="https://github.com/teklumezgebo/Clinical-Database">here</a>.</p>
              <br/>
              <iframe width="440" height="315" src="https://www.youtube.com/embed/CnGBN4bQNnE?si=lpVwgLyzuP6UqWU7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>Taking steps forward.</h2>
              <small>July 2023</small>
              <p>
                I had a great time using the technologies in my previous project but this time I wanted to take it a step further and expand my knowledge by using other tools such as Ruby on Rails and PostgreSQL. 
                The transition was almost seamless as the similarities between Sinatra and Rails along with SQLite and PostgreSQL were obvious. Rails made my life a lot easier with things such Active Record, serializers,
                and validations. I incorporated a many-to-many relationship between models in my database as well in order to get more comfortable with more intricate data storage. This time around I decided to create a 
                full stack web application that allows users to post destinations that they have been to and leave reviews about those places! 
              </p>
              <br/>
              <p>You can check it out <a href="https://github.com/teklumezgebo/Destination-Tracker">here</a>.</p>
              <br/>
              <iframe width="440" height="315" src="https://www.youtube.com/embed/Kmgipepmqx4?si=HKlh8K9rIcdTEqMV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>Proving myself wrong.</h2>
              <small>August 2023</small>
              <p>
                Coming to the end of my bootcamp journey I wanted my capstone project to be something that I was proud of. I also wanted to look back and know that I did push and challenge myself during the 
                build process. Plant Diary is a full stack web application that utilizes the power of Rails, React, and PostgreSQL. The goal of this project was to allow users to be able to log their plants
                in a diary with their proper care requirements. Users are also able to upload pictures of their plants along with logging growth data that can be vizualized with a chart. This app also let users 
                search for plant guides for the proper care of their plants using <a href="https://perenual.com/docs/api">Perenaul's</a> API. Utilizing technologies such as Active Storage,
                Chart.js, and global state management with useContext() this project really pushed me and my programming knowledge. Looking back from where I started I am very proud of myself as I didn't think I could 
                get to where I am now. This project taught me that we will always be students because there is always something new to learn.
              </p>
              <br/>
              <p>You can check it out <a href="https://github.com/teklumezgebo/PD-Plant-Diary">here</a>.</p>
              <br/>
              <iframe width="440" height="315" src="https://www.youtube.com/embed/CnGBN4bQNnE?si=lpVwgLyzuP6UqWU7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <span className="right-container-arrow"></span>
            </div>
          </div>


        </div>
      </body>
  )
}
