import React from 'react';
import History from './History';
import {useDispatch, useSelector } from 'react-redux';


function HistoryList(props) {
    // const Result = useSelector(state => { return state.calculation_data });
    // const expression=()=>{
    //     if(Result.expression.length!==0){
    //         Result.expression.map(data=>{
    //             return(
    //                 // alert('kk')
    //                 <History Data={data}/>           
    //             );
    //         })
    
    //         return(
    //             <History
    //             Data={Result}
                
    //             />
    //         )
    //     }
    // }

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
