import React from "react";


const Contact : React.FC = ({}) => {
    return(
        <div style={{minWidth:300, maxWidth:700, padding:20 }}>
            <p style={{fontSize:18}}>Παρακαλούμε ενημερώστε μας για την παρουσία σας μέχρι τις 15/08</p>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'0 45px'}}>
                <div>
                    <h4>Αλέξανδρος</h4>
                    <h5>6979433445</h5>
                </div>
                <div>
                    <h4>Μαριάννα</h4>
                    <h5>6955905638</h5>
                </div>
            </div>            
        </div>
    )
}

export default Contact; 