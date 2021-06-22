import React from 'react';
import './History.css';
import {useDispatch, useSelector } from 'react-redux';


function History() {
    const Result = useSelector(state => { return state.calculation_data });


 const expression=()=>{
        if(Result.expression.length!==0){
            
            Result.expression.map(data=>{
                // return(data);
                return(
                    <div>
                        <p>{data}</p>
                    </div>
                );
                
            })
    
            // return(
            //     <History
            //     Data={Result}
                
            //     />
            // )
        }
    }
    
    return (
        <div style={{margin: '2px'}}>
            <div id='logic' >
                {/* {Result.expression} */}
                {expression()}
            </div>
            <div id='h_Result'>
                {Result.Result} <hr/>
            </div>
        </div>
    )
}

export default History
