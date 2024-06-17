import React, {useEffect, useState} from "react";

const Countdown: React.FC = () => {
    const targetDate = Date.parse("2024-08-31T18:30:00.000+03:00");

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        const now = new Date().getTime();      
        
        var delta = Math.abs( targetDate - now) / 1000;

        // calculate (and subtract) whole days
        var remainingDays = Math.floor(delta / 86400);
        delta -= remainingDays * 86400;

        // calculate (and subtract) whole hours
        var remainingHours = Math.floor(delta / 3600) % 24;
        delta -= remainingHours * 3600;

        // calculate (and subtract) whole minutes
        var remainingMinutes = Math.floor(delta / 60) % 60;
        delta -= remainingMinutes * 60;

        // what's left is seconds
        var remainingSeconds = Math.floor(delta % 60);  // in theory the modulus is not required
   
          setDays(remainingDays);
          setHours(remainingHours);
          setMinutes(remainingMinutes);
          setSeconds(remainingSeconds);
        }, 1000);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [targetDate]);
    
      // Display formatted countdown or message when time runs out
      if (days === 0 && hours === 0 && minutes === 0) {
        return <div>Countdown Finished!</div>;
      }
    
      return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <h2 style={{color:'white', letterSpacing:15, fontWeight:'300'}}>SEE YOU IN</h2>
            <div style={{display:'flex',  flexDirection:'row', gap:20}}>
            <Digit number={days.toString()} label="DAYS"/>
            <Digit number={hours.toString().padStart(2, '0')} label="HOURS"/>
            <Digit number={minutes.toString().padStart(2, '0')} label="MINUTES"/>
            <Digit number={seconds.toString().padStart(2, '0')} label="SECONDS"/>
            </div>
        </div>
      );
    }



interface DigitProps {
    number: string;
    label: string;
}
    
const Digit: React.FC<DigitProps> = ({ number, label }) => {
   
    return (
    <div className='countdown-bg' style={styles.background}>
        <div style={styles.numberContainer}>
            <p  className='countdown-digit' style={{margin:0}}>{number}</p>
        </div>
        <div style={styles.labelContainer}>
            <p  className='countdown-label' style={{color:"rgba(238,132,178)", verticalAlign:'center', margin:0}}>{label}</p>
        </div>
    </div>
    );
};
    
const styles={
    background:{
        //height:180,
        // maxWidth:150,
        // minWidth:50,
        dispay:'flex',
        background:'rgba(0,0,0,0.15)',
        borderRadius:10,
        marginTop:30,
        marginBottom:100,
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.65)',
    },
    numberContainer:{
        //background:'green',
        height:'75%',
        alignContent:'center'
    },
    labelContainer:{
        background:'white',
        alignContent:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:10
    }


}


export default Countdown;