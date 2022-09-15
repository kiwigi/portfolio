import "./styleSheet.css"

const Navbar = (props) =>{

    const navBarStyle = {
        width: '100%',
        background: '#ffd6e9',
        marginLeft: '-10px',
        marginTop: '-10px',
        // marginRight: '-10px',
        overflow: 'hidden',
        fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
        textAlign: 'center',
        fontSize: '20px',
        color: '#424242',
        position: 'sticky',
        top: "0",
   
        
    }
    const categoryStyle = {
        float: 'right',
        padding: '1.5%',
        marginRight: '50px',
        display: 'inline',
        
        

    }
    // const homeCategoryStyle = {
    //     float: 'left',
    //     padding: '1%',
    //     paddingLeft: '50px',
    //     display: 'inline',
    //     textDecoration: 'none',
    //     color: '#696969',
       
    
    // }


    return <div>     
     <ul style= {navBarStyle}>
        {/* <a href='../' style = {homeCategoryStyle}>
          Home
        </a> */}
        {/* <a href='./Hobbies' style = {categoryStyle}>
          Hobbies
        </a> */}
        <a className={props.isResumeActive} href='./Resume' style =  {categoryStyle}>
          Resume
        </a>
        <a className={props.isAboutActive} href='./About' style = {categoryStyle} >
          About
        </a>
        <a className={props.isPortfolioActive} href='./Portfolio' style = {categoryStyle}>
          Portfolio
        </a>
     </ul>
    </div>
    
}

export default Navbar