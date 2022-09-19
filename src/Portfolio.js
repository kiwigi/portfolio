
import Navbar from './Navbar'
import selfPic from './me.png'


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
      <Navbar isResumeActive={'activeFalse'} isPortfolioActive={'activeTrue'} isAboutActive={'activeFalse'}/>
      <title> Martha Ibarra </title>
      <div className='myName'>  MARTHA IBARRA </div>
     
      <div className='simpleBox'> 
          
          <img className='selfPic' src={selfPic}></img>
          
          <div className='selfIntro'>
                Hi! I'm Mar. I will be graduating from the University of Calgary in December, 2022. I'm passionate about web development and UX design.
          </div>
      
      </div>
      
      <div style={dividorStyle}> 
        
        <div className='secTitle'> Portfolio </div>
      
      </div>

      <div className='simpleBox2'>
        <img className='selfPic' src={selfPic}></img>
        <img className='selfPic' src={selfPic}></img>
        <img className='selfPic' src={selfPic}></img>
        <img className='selfPic' src={selfPic}></img>
        <img className='selfPic' src={selfPic}></img>
        <img className='selfPic' src={selfPic}></img>
        <img className='selfPic' src={selfPic}></img>
      </div>
    </div>
  );
}

export default Portfolio;
