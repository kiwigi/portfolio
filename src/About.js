
import Navbar from './Navbar'
import aboutPic from './meirl.jpeg'
import { findByLabelText } from '@testing-library/react';
import construction from './builderCat.jpeg'


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
       <div className='projPageTitle'> Under construction!</div>
            <img className='picSquare' src={construction}></img>
            <div style={{
              textAlign: 'center'
            }}className='projText'> Working hard to push out some content real soon! Stay tuned.</div>
      </div>
      
  );
}

export default About;
