import "./styleSheet.css"

const Navbar = (props) =>{

    const navBarStyle = {
        width: '100%',
        height: '100px',
        background: '#ffd6e9',
        marginLeft: '-10px',
        marginTop: '-10px',
        marginBottom: '-10px',
        fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
        fontSize: '20px',
        color: '#424242',
        position: 'sticky',
        top: "0",
        position: "fixed"
        // border: '1px solid #ff57a6'
   
        
    }
    const categoryStyle = {
        float: 'right',
        // padding: '1%',
        marginTop: '3%',
        marginBottom: '3%',
        textAlign: 'center',
        paddingRight: '100px',
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
     <div style= {navBarStyle}>
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
     </div>
    </div>
    
}

export default Navbar