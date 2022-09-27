
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
       <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeFalse'} isAboutActive={'activeTrue'}/>
       <div className='simpleBox3'>
            <div className='secTitle'> Under construction </div>
        </div>
      </div>
      
  );
}

export default About;
