import "./styleSheet.css"

const Navbar = (props) => {

  const navBarStyle = {
    width: '100vw',
    height: '80px',
    background: '#ffc7e1',
    fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
    fontSize: '23px',
    position: 'sticky',
    top: "0",
    position: "fixed",
    display: 'flex',

    // border: '1px solid #ff57a6'
  }

  const ulStyle = {
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
    justifyItems: 'center',
    padding: '0px 30px', 
  }  


  const categoryStyle = {
    textDecoration: 'none',
    marginTop: 'auto',
    marginBottom: 'auto'

  }
  const homeCategoryStyle = {
    textDecoration: 'none',
    flexGrow: 1,
    marginTop: 'auto',
    marginBottom: 'auto'

  }


  return <div>
    <div style={navBarStyle}>
      <ul style={ulStyle}>
        
        <li style={homeCategoryStyle}>
          <a className={props.isHomeActive} href='./' >
            HOME
          </a>
        </li>
        <li style={categoryStyle}>
          <a className={props.isPortfolioActive} href='/#projects' >
            PORTFOLIO
          </a>
        </li>
        <li style={categoryStyle}>
          <a className={props.isResumeActive} href='./Resume' >
            RESUME
          </a>
        </li>
        <li style={categoryStyle}>
          <a className={props.isAboutActive} href='./About'  >
            ABOUT
          </a>
        </li>

      </ul>
    </div>
  </div>

}

export default Navbar