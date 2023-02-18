import {reducers, toggleCollapsed} from "./reducers";

test('change store opposite',()=>{
    const state={
        collapsed:false
    }
    let newState= reducers(state, {type:toggleCollapsed})

    expect(newState.collapsed).toBe(!state.collapsed)


})


test('return Error',()=>{
    const state={
        collapsed:false
    }

    expect(()=>
        reducers(state, {type:'AnyFail'})
    ).toThrow()


})

// import {collapsedToggle, reducers, StateType} from "./reducers";
// import {action} from "@storybook/addon-actions";
//
//
// test('should be change collapsed on opposite',()=>{
// const state: StateType={
//     collapsed:false
// }
//    let newState= reducers(state, {type:collapsedToggle})
// expect(newState.collapsed).toBe(!state.collapsed)
//
// })
//
// test('should be change error',()=>{
//     const state: StateType={
//         collapsed:false
//     }
//
//     expect(()=>{
//         reducers(state, {type:'EROR'})
//     }).toThrow()
//
// })