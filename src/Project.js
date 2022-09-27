



function Project(props) {



    const containerStyle={
        backgroundColor: "#ffd6e9",
        borderRadius: "25px",
        padding: '2%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '650px',
        maxHeight: '500px',
        margin: '10px',
        marginTop: '60px',
        marginBottom: '60px',
        justify: "center",
        flexWrap: "wrap",
        textDecoration: "none",
        color: "#242424",
        
     
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
        // borderRadius: "50%",
        flexDirection: 'column'
        


    }

    const descStyle ={

        maxWidth: "450px",
        maxHeight: "250px",
        padding: "1%",
        fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
        fontSize: "20px",
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