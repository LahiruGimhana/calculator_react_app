import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {GET_INPUT_VALUE } from '../action/actionTypes';


const calculationReducer=(state={Result : 0, logic:'', lastOpr:'',lastNum:'' ,mode:'NUM'}, action)=> {
    switch(action.type){
        case GET_INPUT_VALUE:
            let LN=[];
            if(action.mode==="NUM"){
                // let LN=[];
                LN.push(action.Num);
                state.lastNum=parseFloat(LN.join(""));
                console.log(state.lastNum);
                if(state.mode==='NUM'){
                    let Result;
                    if(action.Num!=='.'){
                        let arr=[state.Result , action.Num];
                        Result=parseInt(arr.join(""));
                    }
                    else{
                        let arrr=[state.Result , action.Num];
                        let arr=arrr.join("");
                        Result=parseFloat(arr);
                    }

                    state={...state, Result: Result, lastNum:action.Num, logic: action.Num, mode:action.mode}
                    return state;
                }
                else{
                    let Logic={...state, logic: state.logic + action.Num};
                    state={...state, lastNum:action.Num, logic: Logic, mode:action.mode}
                    
                }
            }


            else if(action.mode==="OPR"){
                // LN.length = '';
                if(state.lastOpr==='' && action.Opr!=='C'){
                    state={...state, logic: action.Opr, lastOpr:action.Opr, mode: action.mode}
                    return state;
                }
                // else if(action.Opr==='+'){
                else{
                        let Result;
                        let LastOpr=action.Opr;
                        if(state.lastOpr==='+'){
                            Result=state.Result + state.lastNum;
                        }else if(state.lastOpr==='-'){
                            Result=state.Result - state.lastNum;
                        }else if(state.lastOpr==='*'){
                            Result=state.Result * state.lastNum;
                        }else if(state.lastOpr==='/'){
                            Result=state.Result / state.lastNum;
                        }else if(state.lastOpr==='='){
                            Result=state.Result;
                        }else {}
                        
                        if(action.Opr==='C'){
                            state={Result : '', logic:'', lastOpr:'',lastNum:'',mode:'NUM' }
                            return state;
                        }

                    // let Logic={...state, logic: state.logic + action.Num};
                    // state={...state, Result: Result, logic: Logic, mode: action.mode};
                    // return state;

                    let Logic={...state, logic: state.logic + action.Opr};

                    state={...state, Result:Result, logic: Logic, lastOpr:LastOpr, mode: action.mode}
                    return state;
                }
            }

        default:
            return state;
            
    }
}

export default calculationReducer

