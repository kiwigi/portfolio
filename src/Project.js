import tgcc from "./tgcc.png"



function Project(props) {



    const containerStyle={
        backgroundColor: "#ffd6e9",
        borderRadius: "25px",
        padding: '2%',
        display: 'flex',
        maxWidth: '650px',
        maxHeight: '500px',
        margin: '10px',
        marginTop: '60px',
        justify: "center",
        flexWrap: "wrap",
        textDecoration: "none",
        color: "grey"
     
    }

    const titleStyle={
        fontSize: "30px",
        fontFamily: 'FredokaOne-Regular',
        padding: '1%',
        textAlign: "center",
        flexDirection: "row",
        textDecoration: "none",
        
    }

    const imgStyle ={

        maxWidth: "250px",
        maxHeight: "250px",
        padding: "1%",
        borderRadius: "50%",


    }

    const descStyle ={

        maxWidth: "250px",
        maxHeight: "250px",
        padding: "1%",
        borderRadius: "50%",
        fontFamily: 'Century Gothic,CenturyGothic,AppleGothic,sans-serif',
        fontSize: "17px",
        textDecoration: "none",
    
    }

   


    return(
        <div>
            <a href={props.projLink} style={containerStyle}>

            <div style={titleStyle}> {props.projTitle}</div>
            <img src={props.projImgSrc} style={imgStyle}> 
            </img>
            <div style={descStyle}>{props.projDesc}</div>
            </a>
            
        </div>

    );

}

export default Project