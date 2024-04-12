import React, {useState, useEffect, useRef} from 'react';
import watercolorBg from './../images/watercolor-blue.jpg'
import flowerDeco from './../flower_deco.jpg'
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
        <img src={OliveBranch} style={{width:250, color:'white'}} />
        <div style={styles.topSection.container}>
            <p style={styles.topSection.text}>Αλέξανδρος </p>
            <p style={{...styles.topSection.text, fontSize:100}} >&</p>
            <p style={styles.topSection.text}>Μαριάννα</p>
        </div>
        <div style={styles.middleSection.container}>
            <div>
                <h2 style={styles.middleSection.bordered}>ΣΑΒΒΑΤΟ</h2>  
            </div>
            <h1 style={styles.middleSection.number}>31</h1>
            <div>
                <h2 style={styles.middleSection.bordered}>ΑΥΓΟΥΣΤΟΥ</h2>
            </div>
        </div>
        <h2 style={styles.middleSection.numberYear}>2024</h2>
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
        <img src={OliveBranch} style={{width:250, color:'white'}} />
        <div style={styles.backSection.container}>
            <p style={styles.backSection.simpleText}>Θα χαρούμε να παρευρεθείτε στο γάμο μας</p>
            <p style={styles.backSection.simpleText} >που θα γίνει το Σάββατο 31 Αυγούστου στις 18:30</p>
            <p style={styles.backSection.simpleText}>στον Ι.Ν. Κοιμήσεως της Θεοτόκου Σαλαμίνας</p>
        </div>
        <div style={styles.backSection.container}>
            <p style={styles.backSection.simpleText}>Οι γονείς</p>
            <p style={styles.backSection.simpleText} >Αθανάσιος & Ευμορφία Τσιώρα </p>
            <p style={styles.backSection.simpleText}>Αθανάσιος & Χρυσάνθη Δημητριάδου</p>
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
  //const font = 'FoulisGreek';
  const font = 'Miama';
//const font = 'VAG-HurryPen';
//const font = 'Slimamif';

const styles={
    background:{
        backgroundImage: `url(${watercolorBg})`, // Use template literal for clarity
        backgroundSize: 'cover', // Ensure image fills the entire div
        backgroundPosition: 'center', // Center the image within the div
        // background:'#E6B1F4',
        height:800,
        width:650,
        marginTop:100,
        marginBottom:100,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    },
    topSection:{
        container:{
            paddingTop:5
        },
        text:{
            color:'white',
            fontFamily:font,
            fontSize:60,
            margin:0                
        }
    },
    middleSection:{
        container:{
            display:'flex',
            FlexDirection:'row',
            justifyContent:'space-evenly',
            marginTop:20,
            alignItems:'center',           
        },
        bordered:{
            margin:15,
            border:'solid',
            borderTopWidth:2,
            borderBottomWidth:2,
            borderLeftWidth:0,
            borderRightWidth:0,
            borderColor:'white',
            padding:5,
            width:200  ,
            fontFamily:font          
        },
        number:{
            fontSize:100,
            fontWeight:'200',
            fontFamily:font
        },
        numberYear:{
            fontFamily:font
        }
    },
    bottomSection:{
        container:{
            margin:50
        },
        text:{
            color:'white',
            fontFamily:font,
            fontSize:25,
            margin:0
            
        }
    },
    backSection:{
        container:{
            paddingTop:40
        },
        simpleText:{
            color:'white',
            fontFamily:font,
            margin:0,
        },
        cursiveText:{
            color:'white',
            fontFamily:"Dancing Script",
            fontSize:50,
            margin:0,
        }
    },
    flipBtnIcon:{
        color:'white',
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