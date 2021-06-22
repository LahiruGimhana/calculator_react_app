// import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {GET_INPUT_VALUE } from '../action/actionTypes';


const calculationReducer=(state={LN:[], expression:[], Result : 0,  lastOpr:'',currentNum:'' ,lastNum:'' , mode:'NUM'}, action)=> {
    switch(action.type){
        case GET_INPUT_VALUE:
            
            if(action.mode==="NUM"){
                if(state.mode==='OPR' && state.lastNum==='') {
                    state.lastNum=parseFloat(state.LN.join("")); //use array to float **********
                    state.LN.length=0;
                    state.mode='OPR';

                }
                else if(state.mode==='OPR' && state.lastNum!==''){
                    state.currentNum=parseFloat(state.LN.join(""));
                    state.LN.length=0;
                    state.mode='NUM';
                }
                else{
                    // state.Result=parseFloat(state.LN.join(""));
                    // state={...state, Result: state.lastNum,  logic: action.Num, mode:'NUM'}
                }

                    state.LN.push(action.Num);
                
                    state.Result=parseFloat(state.LN.join(""));
                    
                    state={...state, mode:'NUM'}
                    return state;

            }




            if(action.mode==="OPR"){
                // state.lastNum=state.Result;

                if(action.Opr==='C' || action.Opr==='x'){
                    state={...state, LN:[], Result : 0, lastOpr:'',currentNum:'' ,lastNum:'' ,mode:'NUM' }
                    return state;
                }


                if(state.lastNum==='' && state.mode==='NUM'){
                    state.lastOpr= action.Opr;
                    console.log(state.lastOpr);
                    state.mode=action.mode;
                }else if(state.mode==='OPR'){
                    state.lastOpr= action.Opr;
                    state.mode=action.mode;  
                }else{
                    state.mode='NUM';
                }
                
                if(state.mode==='NUM'){
                    if(state.LN.length!==0){
                        state.currentNum=parseFloat(state.LN.join("")); //use array to float **********
                        console.log(state.currentNum);
                        state.LN.length=0;
                    }else{
                    }

                    if(state.lastNum!==''){
                        let Result;
                        let LastOpr=action.Opr;

                        if(state.lastOpr==='+'){
                            Result=state.lastNum + state.currentNum;
                        }else if(state.lastOpr==='-'){
                            Result=state.lastNum - state.currentNum;
                        }else if(state.lastOpr==='*'){
                            Result=state.lastNum * state.currentNum;
                        }else if(state.lastOpr==='/'){
                            Result=state.lastNum / state.currentNum;
                        }else if(state.lastOpr==='='){
                            Result=state.Result;
                        }else {
                            Result=state.Result;
                        }


                    state.mode='NUM';

                    let Expr=state.lastNum + action.Opr + state.currentNum + '=';
                    state.expression.push(Expr);
                    state.currentNum='';
                    state={...state, lastNum:Result, Result:Result, lastOpr:LastOpr}
                    return state;
                }
                state.lastNum=state.Result

                if(state.lastOpr==='' && action.Opr!=='C'){
                    state={...state,  lastOpr:action.Opr, mode: action.mode}
                    return state;
                }
                return state;

            }
            state.lastNum=state.Result
            state={...state, state}
            return state;

        }


        default:
            return state;           
    }
}

export default calculationReducer

