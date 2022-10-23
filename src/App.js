
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import PortfolioProj1 from "./PortfolioProj1"
import BobaLockscreen from "./BobaLockscreen"
import Tgcc from "./Tgcc"
import "./styleSheet.css"
import {  Link } from "react-router-dom";



function App() {

  let currScreen
  switch (window.location.pathname) {
      case '/':
          currScreen = <Portfolio />
          break;
      case '/About':
          currScreen = <About />
          break;
      case '/Resume':
          currScreen = <Resume />
          break;
      case '/PortfolioProj1':
            currScreen = <PortfolioProj1 />
          break;
      case '/BobaLockscreen':
            currScreen = <BobaLockscreen />
      case '/Tgcc':
            currScreen = <Tgcc />
          break;
  }

  return (
      <div>
          {currScreen}
         
      </div>  
  );
}

export default App;
