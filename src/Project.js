



function Project(props) {



    const containerStyle={
        
        borderRadius: "25px",
        padding: '2%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        maxHeight: '500px',
        margin: '10px',
        marginTop: '60px',
        marginBottom: '60px',
        justify: "center",
        
        textDecoration: "none",
        color: "#242424",
        overflow: 'scroll',
        flexDirection: 'column'
        
     
    }

    const titleStyle={
        fontSize: "30px",
        fontFamily: 'FredokaOne-Regular',
        maxHeight: '50px',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textDecoration: "none",
        
    }

    const imgStyle ={

        maxWidth: "600px",
        width: '95%',
        maxHeight: "250px",
        padding: "1%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '25px',
        // borderRadius: "50%",
        flexDirection: 'column'
        


    }

    const descStyle ={

        maxWidth: "600px",
        width: '95%',
        padding: "5%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '25px',
        fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
        fontSize: "18px",
        backgroundColor: 'white',
        textDecoration: "none",
        
    
    }

   


    return(
        <div>
            <a href={props.projLink} style={containerStyle}>
            {/* <div style={titleStyle}> {props.projTitle}</div> */}
            <img src={props.projImgSrc} style={imgStyle}> 
            </img>
            
           
            <div style={descStyle}>{props.projDesc}</div>
            </a>
            
        </div>

    );

}

export default Project