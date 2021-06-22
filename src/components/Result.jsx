import React from 'react';
import './Result.css';
import {useSelector } from 'react-redux';


function Result() {

    const Result = useSelector(state => { return state.calculation_data })
            // {/* <p placeholder="Result" style={{textAlign:'left',paddingTop:'0px', backgroundColor:'rgb(77, 79, 82)'}}>Standard</p> */}

    return (
        <div>
            <div className="row" id='result_history'>
                <span class="label label-default">{Result.lastNum}{Result.lastOpr}</span>
            </div>
            <div className="row" id='result'>
                <span class="label label-default" id="alert"  style={{height:'50px'}}>
                    <p placeholder="Result">{Result.Result}</p>
                </span>
            </div>
        </div>
    )
}

export default Result
