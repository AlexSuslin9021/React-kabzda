
export const toggleCollapsed='CHANGE-COLLAPSED'

type Storetype={
    collapsed:boolean
}
type actionType={
    type:string
}
export const reducers=(store:Storetype, action:actionType):Storetype=>{
    switch (action.type){
        case toggleCollapsed:
            return {...store, collapsed:!store.collapsed}
        default:throw new Error('Error')
    }
    return store
}






// import React from 'react';
//
//
// export const collapsedToggle='CHANGE-COLLAPSED'
// type ActionType={
//     type: string
// }
// export type StateType={
//     collapsed:boolean
// }
// export const reducers = (state:StateType,action:ActionType ):StateType => {
//     switch (action.type) {
//         case collapsedToggle:
//             return {...state, collapsed:!state.collapsed};
//         default: throw new Error ('Warning')
//     }
//
// return state
// };

