
import Navbar from './Navbar'
import aboutPic from './meirl.jpeg'
import { findByLabelText } from '@testing-library/react';


function About() {

  const pageStyle = {
    backgroundColor: '#ebebeb',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10% 10%',
    width: '700px',
    height: '400px'
  }

  const aboutContainer = {
    backgroundColor: '#ebebeb',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10% 10%',
    width: '700px',
    height: '400px'

  }


  return (
    <div>
       <Navbar isResumeActive={'activeFalse'} isPortfolioActive={'activeFalse'} isAboutActive={'activeTrue'}/>
      <div style={pageStyle}>
      <div style={aboutContainer}>
        <img src={aboutPic} className='aboutPic'/>
        <p>Eiusmod tempor cupidatat sint aliqua mollit ex ad labore. Veniam ex ad ut excepteur incididunt esse tempor amet ea ut tempor anim adipisicing id. Dolor velit velit laborum enim velit. Ex sint labore ex proident id minim. Lorem anim do culpa et aliqua. Velit ex proident Lorem amet fugiat reprehenderit ex ea commodo ad ex nostrud minim. Proident fugiat mollit nulla ut officia dolore anim est tempor duis velit consequat consectetur dolore.</p>
      </div>
    </div>
      </div>
      
  );
}

export default About;
