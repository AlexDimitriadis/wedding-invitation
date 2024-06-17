import React from "react";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs"
import 'react-tabs/style/react-tabs.css';
import { isBreakOrContinueStatement } from "typescript";

interface LocationProps {
    url: string;
}
  

const PortTabs : React.FC = ({}) => {
 return(
    <div style={{ maxWidth:700, display:'flex', width:'90%'}}>
        
        <Tabs style={{backgroundColor:'rgba(0,0,0,0.3)',padding:25, borderRadius:5, width:'100%'}}>
            <TabList>
                <Tab>Πέραμα</Tab>
                <Tab>Μέγαρα</Tab>
            </TabList>
            <TabPanel>
                <div className='port-tabpanel'>
                    <div className="port-map">
                        <h5>Κοινοπραξία πορθμείων Σαλαμίνος "Αγιος Νικόλαος"</h5> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7481.880299286094!2d23.550308843718266!3d37.95978261129114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b0bbe5aad8a7%3A0x121d9e5be51f5017!2zzprOv865zr3Ov8-Az4HOsc6-zq_OsSDPgM6_z4HOuM68zrXOr8-Jzr0gzqPOsc67zrHOvM6vzr3Ov8-CICLhvI3Os865zr_PgiDOnc65zrrPjM67zrHOv8-CIg!5e0!3m2!1sel!2sgr!4v1718230384144!5m2!1sel!2sgr" 
                        max-width="400" height="300"></iframe>
                    </div>
                    {separator}
                    <div className="port-info">
                        <h5>Τιμη</h5>
                        <ul>
                            <li style={ListItemStyle.text}>Αυτοκίνητο έως 4,25μ: 6,15€ </li>
                            <li style={ListItemStyle.text}>Αυτοκίνητο μεγαλύτερο από 4,25μ: 7,20€ </li>
                        </ul>
                        <br/>
                        <h5>Πρόγραμμα</h5>
                        <ul>
                            <li style={ListItemStyle.text}>05:30 - 00:00: κάθε 15 λεπτά </li>
                            <li style={ListItemStyle.text}>00:00 - 05:30: κάθε 30 λεπτά </li>
                        </ul>
                    </div>
                        
                </div>
            </TabPanel>
            <TabPanel>
                <div className="port-tabpanel">
                    <div className="port-map" >
                        <h5>Πέραμα Μεγαρίδος</h5> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12578.171859135304!2d23.40041679764928!3d37.987793984332214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b365b4682629%3A0x8fea67fb588536c2!2zzqDOrc-BzrHOvM6xIM6czrXOs86xz4HOr860zr_Pgg!5e0!3m2!1sel!2sgr!4v1718230603327!5m2!1sel!2sgr" 
                        max-width="400" height="300"></iframe>
                    </div>
                    {separator}
                    <div className="port-info" >                        
                        <h5>Πρόγραμμα</h5>
                        <ul>
                            <li style={ListItemStyle.text}>05:30 - 15:00: κάθε 30 λεπτά </li>
                            <li style={ListItemStyle.text}>15:00 - 21:45: 14:20, 15:00, 16:00, 17:00, 18:00, 19:00, 20:00, 21:45</li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    </div>
 )
}

const separator = <div className='separator' />

const ListItemStyle={
    text:{
        fontSize:15
    }
}


const Locations: React.FC<LocationProps> = ({ url }) => {
    
    return (
        <div>

            <div className="block">
				<h4>Ιερός Ναός Κοιμήσεως Θεοτόκου</h4> 
                <h5>Mitilinis, Αργοναυτών &, Αιάντειο</h5>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6294.433887341614!2d23.462533113168103!3d37.925362001355644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b5d03088bf2b%3A0x13d07351b3bac6b6!2zzpnOtc-Bz4zPgiDOnc6xz4zPgiDOms6_zq_OvM63z4POt8-CIM6kzrfPgiDOmM61zr_PhM-MzrrOv8-F!5e0!3m2!1sel!2sgr!4v1712508625316!5m2!1sel!2sgr" 
                max-width="650" width="90%" height="450" />
            </div>
            <div style={{marginTop:25}}>
                <h4>Κτήμα Φιλιππικόν</h4> 
                <h5>Φιλίππων 4, Αιάντειο 189 03</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5294.646055713334!2d23.43828866557003!3d37.90202813448954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1b58f902f78f5%3A0xfd69fee9036fdf88!2zzprPhM6uzrzOsSDOps65zrvOuc-Az4DOuc66z4zOvQ!5e0!3m2!1sel!2sgr!4v1712504090120!5m2!1sel!2sgr"
                max-width="650" width="90%" height="450"  style={{}} loading="lazy"/>
                </div>
        </div>
    )
    
};

export {Locations, PortTabs};