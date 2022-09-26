
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import PortfolioProj1 from "./PortfolioProj1"
import "./styleSheet.css"



function App() {

  let currScreen
  switch (window.location.pathname) {
      case '/':
          currScreen = <Portfolio />
          break;
      case '/About':
          currScreen = <About />
          break;
      case '/Portfolio':
          currScreen = <Portfolio />
          break;
      case '/Resume':
          currScreen = <Resume />
          break;
  }

  return (
      <div>
          {currScreen}
         
      </div>  
  );
}

export default App;
