
import Navbar from './Navbar'


function Resume() {
  return (
    <div>
      <Navbar isResumeActive={'activeTrue'} isPortfolioActive={'activeFalse'} isAboutActive={'activeFalse'}/>
      <div>this is the Resume page</div>
    </div>
  );
}

export default Resume;
