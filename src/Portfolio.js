
import Navbar from './Navbar'
import selfPic from './me.png'


function Portfolio() {

  const pageStyle = {
    justifyContent: 'center'
  }


  return (
    <div style={pageStyle}>
      <Navbar isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>
      <title> Martha Ibarra </title>
      <div className='myName'> MARTHA IBARRA</div>
      <div className='simpleBox'> 
          <img className='selfPic' src={selfPic}></img>
          <div className='selfIntro'>
                Hi! I'm Mar. I will be graduating from the University of Calgary in December 2022. I'm passionate about web development and UX design.
          </div>
      
      </div>
    </div>
  );
}

export default Portfolio;
