import React from 'react';
import History from './History'

function HistoryList() {
    
    return (
        <div className="row" style={{backgroundColor:'rgb(61, 66, 71)', height:'60vh', paddingTop:'20px'}}>
            {/* <ul> */}
                <ul className="list-group">
                    <div>
                        < History />
                    </div>
                </ul>
            {/* </ul> */}
        </div>
    );
    
}

export default HistoryList
