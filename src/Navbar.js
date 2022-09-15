import "./styleSheet.css"

const Navbar = (props) =>{

    const navBarStyle = {
        width: '99%',
        height: '100px',
        background: '#ffd6e9',
        marginLeft: '-15px',
        marginTop: '-10px',
        overflow: 'hidden',
        fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
        textAlign: 'center',
        fontSize: '20px',
        color: '#424242',
        position: 'sticky',
        top: "0",
        // border: '1px solid #ff57a6'
   
        
    }
    const categoryStyle = {
        float: 'right',
        padding: '1.5%',
        marginTop: '1%',
        marginBottom: '1%',
        paddingRight: '50px',
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