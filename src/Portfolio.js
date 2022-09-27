
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
        <Project projLink='./PortfolioProj1' projTitle='SpongeBob Task Tracker' projImgSrc={vfyr} projDesc={'This is a simple button application that plays music for the duration of a task.'}/>
        <Project projLink='./Tgcc' projTitle='The Global Climate Crisis' projImgSrc={tgcc} projDesc={'A static poster-like website about climate change.'}/>


      </div>
    </div>
  );
}

export default Portfolio;
