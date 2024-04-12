import React from "react";

interface LocationProps {
    url: string;
}
  
const Locations: React.FC<LocationProps> = ({ url }) => {
    const getColor = (num: number): string => {
      let color = 'white';
      switch(num) {
          case 1: 
              color =  'beige'
              break;
          case 2:
              color =  'powderblue'
              break;
          case 3:
              color =  'green'
              break;
      }
      return color;
    }
    const styles = {
    backgroundColor:'white',
    width: '100%',
    height: 800,
    };

    return (
        <div>

            <div className="block">
				<h4>Ιερός Ναός Κοιμήσεως Θεοτόκου</h4> 
                <h5>Mitilinis, Αργοναυτών &, Αιάντειο</h5>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6294.433887341614!2d23.462533113168103!3d37.925362001355644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b5d03088bf2b%3A0x13d07351b3bac6b6!2zzpnOtc-Bz4zPgiDOnc6xz4zPgiDOms6_zq_OvM63z4POt8-CIM6kzrfPgiDOmM61zr_PhM-MzrrOv8-F!5e0!3m2!1sel!2sgr!4v1712508625316!5m2!1sel!2sgr" 
                width="600" height="450" />
            </div>
            <div style={{marginTop:75}}>
                <h4>Κτήμα Φιλιππικόν</h4> 
                <h5>Φιλίππων 4, Αιάντειο 189 03</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5294.646055713334!2d23.43828866557003!3d37.90202813448954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b58f902f78f5%3A0xfd69fee9036fdf88!2zzprPhM6uzrzOsSDOps65zrvOuc-Az4DOuc66z4zOvQ!5e0!3m2!1sel!2sgr!4v1712504090120!5m2!1sel!2sgr"
                width="600" height="450"  style={{}} loading="lazy"/>
                </div>
        </div>
    )
    
};

export default Locations;