
import Navbar from './Navbar'
import selfPic from './me.png'
import Project from './Project'
import vfyr from "./vfyr.png"
import tgcc from "./tgcc.png"
import PortfolioProj1 from "./PortfolioProj1"

function Portfolio() {

  const dividorStyle = {
    width: '99%',
    height: '60px',
    background: 'radial-gradient( 700px,#ff71b3,transparent)',
    margin: 'auto',
    marginTop: '15%',
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: '20px',
    color: '#424242',
    
    // border: '1px solid #ff57a6'

    
}

  const pageStyle = {
    justifyContent: 'center'
  }


  return (
    <div style={pageStyle}>
      <Navbar isHomeActive={'activeTrue'}isResumeActive={'activeFalse'} isPortfolioActive={'activeFalse'} isAboutActive={'activeFalse'}/>
      <title> Martha Ibarra </title>
      <div className='myName'>  MARTHA IBARRA </div>
     
      <div className='simpleBox'> 
          
          <img className='selfPic' src={selfPic}></img>
          
          <div className='selfIntro'>
                Hi! I'm Mar. I will be graduating from the University of Calgary in December, 2022. I'm passionate about web development and UX design.
          </div>
      
      </div>
      
      <div id = 'projects' style={dividorStyle}> 
        
        <div className='secTitle'> Projects </div>
      
      </div>

      <div className='simpleBox2'>
        <Project projLink='./BobaLockscreen' projTitle='Bubble Tea Lockscreen' projImgSrc={''} projDesc={'This is a web application meant to simulate a smartphone lock screen. This one uses the accelerometer of the smartphone and requires the user to physically move their device in order to interact with it. For this lock screen, your password is your favourite bubble tea order. First, pick your drink of choice and mix it until the desired result is achieved.  Shake your drink (via shaking your phone) to mix it until it\'s just right- but be sure not to under or overmix or your order will be all wrong!  When you are done mixing and ready to unlock, stab the straw into your drink (via swinging your phone in a swift downwards motion).  If your drink is correct, you will be permitted to enter.'}/>
        <Project projLink='./PortfolioProj1' projTitle='SpongeBob Task Tracker' projImgSrc={vfyr} projDesc={'This is a simple button application that plays music for the duration of a task.'}/>


      </div>
    </div>
  );
}

export default Portfolio;
