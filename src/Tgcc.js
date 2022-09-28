
import Navbar from './Navbar'
import construction from './builderCat.jpeg'


function Tgcc() {
  return (
    <div>
        <Navbar isHomeActive={'activeFalse'} isResumeActive={'activeFalse'} isPortfolioActive={'activeFalse'} isAboutActive={'activeFalse'}/>

        <div className='projPageTitle'> Under construction!</div>
            <img className='picSquare' src={construction}></img>
            <div style={{
              textAlign: 'center'
            }}className='projText'> Working hard to push out some content real soon! Stay tuned.</div>
        
    </div>
  );
}

export default Tgcc;
