
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
          <div className='selfIntro' src={selfPic}></div>
      
      </div>
    </div>
  );
}

export default Portfolio;
