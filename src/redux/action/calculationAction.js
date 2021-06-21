import {GET_INPUT_VALUE } from './actionTypes';

export const sendInputNu=(Num)=>{
    return {type: GET_INPUT_VALUE, mode:'NUM',  Num}
}

export const sendInputOpr=(Opr)=>{
    return {type: GET_INPUT_VALUE, mode:'OPR', Opr}
}