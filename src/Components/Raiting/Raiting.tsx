import React from "react";

type RaitingPropsType={
    value:0 | 1 | 2| 3 | 4 | 5
}
export function Raiting(props:RaitingPropsType) {
    console.log('rendered Raiting')
    // if(props.value ===1){
        return   <div>
        <Star selected={props.value >0}/>
        <Star selected={props.value >1}/>
        <Star selected={props.value >2}/>
        <Star selected={props.value >3}/>
        <Star selected={props.value >4}/>

    </div> }


type StarPropsType = {
    selected:boolean
}
function Star(props:any) {
    console.log('rendered Star')
    if(props.selected===true) {
        return <span><b>star</b> </span>
    } else {return  <span>star</span>}

}
export default Raiting