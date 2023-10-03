import Image from "next/image"
import blackcircle from './images/circle.png'

export default function Home() {
  return (
    
      <body>
        <div>Teklu Mezgebo Full Stack Web Developer</div>
        <div className="timeline">
          
          <div className="container left-container">
            <Image className="img" src={blackcircle} alt='circle' width={40} height={40}/>
            <div className="textbox">
              <h2>The start</h2>
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
