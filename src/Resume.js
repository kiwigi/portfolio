
import Navbar from './Navbar'


function Resume() {
  return (
    <div>
      <Navbar isResumeActive={'activeTrue'} isPortfolioActive={'activeFalse'} isAboutActive={'activeFalse'}/>
      this is the Resume page
    </div>
  );
}

export default Resume;
