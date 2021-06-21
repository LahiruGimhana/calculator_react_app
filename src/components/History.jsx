import React from 'react';
import './History.css';
import {useDispatch, useSelector } from 'react-redux';


function History() {
    const Result = useSelector(state => { return state.calculation_data })
    return (
        <div style={{margin: '2px'}}>
            <div id='logic' >
                {Result.Result}{Result.lastOpr}{Result.lastNu}
            </div>
            <div id='h_Result'>
                {Result.Result} <hr/>
            </div>
        </div>
    )
}

export default History
