import React, {useState, useEffect, useRef} from 'react';
// import watercolorBgBL from './../images/watercolor-blue.jpg'
import watercolorBg from './../images/paper-texture-2.jpg'
import flowerDeco from './../images/flower_deco-wc.png'
import Lavender from './../images/lavender.png'
import './../index.css';
import ReactCardFlip from "react-card-flip";
import OliveBranch from './../images/olive-branch.svg'

interface InvitationFronProps {
    onClick: any;
}
  

const InvitationFront:React.FC<InvitationFronProps> = ({onClick}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Focus the button after the component renders
        if (buttonRef.current) {
        buttonRef.current.focus();
        }
    }, []);

    return (
      <div className="background" style={styles.background}>
        {/* <img src={OliveBranch} style={{width:250, color:'white'}} /> */}
        <img  className="flower-deco" src={flowerDeco} style={{ color:'white'}} />

        <div style={styles.topSection.container}>
            <p style={styles.topSection.text}>Αλέξανδρος </p>
            <p style={styles.topSection.text} >&</p>
            <p style={styles.topSection.text}>Μαριάννα</p>
        </div>
        
        <h2 style={{...styles.middleSection.numberSmall, marginLeft:20}}>18:30</h2>
        <div style={styles.middleSection.container}>
            <div>
                <h2 style={styles.middleSection.bordered}>ΣΑΒΒΑΤΟ</h2>  
            </div>
            <h1 style={styles.middleSection.number}>31</h1>
            <div>
                <h2 style={styles.middleSection.bordered}>ΑΥΓΟΥΣΤΟΥ</h2>
            </div>
        </div>
        <h2 style={styles.middleSection.numberSmall}>2024</h2>
        <div style={styles.bottomSection.container}>
            <p style={styles.bottomSection.text}>Σας περιμένουμε στο γάμο μας 31/08/24 στον Ιερό Ναό Κοιμήσεως της Θεοτόκου στη Σαλαμίνα </p>
            
        </div>
        <button className='flip-button'  ref={buttonRef}  onClick={onClick}>
            <span className="material-symbols-outlined" style={styles.flipBtnIcon}>autorenew</span>
        </button>
    </div>
    );
  }



  const InvitationBack:React.FC<InvitationFronProps> = ({onClick}) => {

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Focus the button after the component renders
        if (buttonRef.current) {
        buttonRef.current.focus();
        }
    }, []);

    return (
      <div className="background" style={styles.background}>
        {/* <img src={OliveBranch} style={{width:250, color:'black'}} /> */}
        <img className='flower-deco' src={flowerDeco} style={{ color:'white'}} />

        <div style={styles.backSection.container}>
            <p style={styles.backSection.simpleText}>Θα χαρούμε να παρευρεθείτε στο γάμο μας</p>
            <p style={styles.backSection.simpleText} >που θα γίνει το Σάββατο 31 Αυγούστου στις 18:30</p>
            <p style={styles.backSection.simpleText}>στον Ι.Ν. Κοιμήσεως της Θεοτόκου Σαλαμίνας</p>
        </div>
        <div style={styles.backSection.container}>
            <p style={styles.backSection.simpleText}>Οι γονείς</p>
            <p style={styles.backSection.simpleText}>Αθανάσιος & Χρυσάνθη Δημητριάδου</p>
            <p style={styles.backSection.simpleText} >Αθανάσιος & Ευμορφία Τσιώρα </p>
        </div>
        <div style={styles.backSection.container}>
            <p style={styles.backSection.simpleText}>Ο κουμπάρος</p>
            <p style={styles.backSection.simpleText} >Αλέξανδρος Ζάραγκας</p>
        </div>        
        <div style={styles.backSection.container}>
            <p style={styles.backSection.cursiveText}>Save the Date</p>
            <p style={styles.backSection.cursiveText} >31 | 08 | 24</p>
        </div> 
        <button className='flip-button'   ref={buttonRef}  onClick={onClick}>
            <span className="material-symbols-outlined" style={styles.flipBtnIcon}>autorenew</span>
        </button>
    </div>
    );
  }
//   const font = 'FoulisGreek';
   const font = 'Miama';
//const font = 'VAG-HurryPen';
// const font = 'Slimamif';
const textColor='rgba(0, 0, 0, 1)'
const fontWeight='500'

const styles={
    background:{
        backgroundImage: `url(${watercolorBg})`, // Use template literal for clarity
        backgroundSize: 'cover', // Ensure image fills the entire div
        backgroundPosition: 'center', // Center the image within the div
        // background:'#E6B1F4',
        height:850,
        width:650,
        marginTop:100,
        marginBottom:100,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)',
    },
    topSection:{
        container:{
            paddingTop:50
        },
        text:{
            color:textColor,
            fontFamily:font,
            padding:0,
            //fontSize:60,
            fontSize:70,
            
            margin:0    , 
            fontWeight:fontWeight          
        }
    },
    middleSection:{
        container:{
            display:'flex',
            FlexDirection:'row',
            justifyContent:'space-evenly',
            marginTop:0,
            alignItems:'center',           
        },
        bordered:{
            margin:15,
            border:'solid',
            borderTopWidth:2,
            borderBottomWidth:2,
            borderLeftWidth:0,
            borderRightWidth:0,
            borderColor:textColor,
            padding:5,
            width:200  ,
            fontFamily:font,
            color:textColor ,
            fontWeight:fontWeight          

        },
        number:{
            fontSize:100,
            
            //fontWeight:'200',
            fontFamily:font,
            color:textColor,
            fontWeight:fontWeight          

        },
        numberSmall:{
            fontFamily:font,
            color:textColor,
            fontWeight:fontWeight,
            padding:0       

        }
    },
    bottomSection:{
        container:{
            margin:50
        },
        text:{
            color:textColor,
            fontFamily:font,
            //fontSize:25,
            fontSize:36,
            margin:0,
            fontWeight:fontWeight          

            
        }
    },
    backSection:{
        container:{
            paddingTop:50
        },
        simpleText:{
            color:textColor,
            fontFamily:font,
            fontSize:40,
            margin:0,
            fontWeight:fontWeight          

        },
        cursiveText:{
            color:textColor,
            fontFamily:"Dancing Script",
            fontSize:40,            
            margin:0,
            fontWeight:400          

        }
    },
    flipBtnIcon:{
        color:textColor,
        opacity: 0.8,
        fontSize:35, 
        marginTop:7
    }

}
  

interface CardProps {
    onClick: any;

}
  
//   const ColorDiv: React.FC<ColorDivProps> = ({ number }) => {

const Card: React.FC<CardProps> = ({ onClick }) => {
    const [flip, setFlip] = useState(false);

    return (
        <ReactCardFlip isFlipped={flip}
        flipDirection="horizontal">
       
            <InvitationFront onClick={() => setFlip(!flip)}/>          
           
            <InvitationBack onClick={() => setFlip(!flip)}/>
            
    </ReactCardFlip>
    );
  }


export default InvitationFront;

export {Card};