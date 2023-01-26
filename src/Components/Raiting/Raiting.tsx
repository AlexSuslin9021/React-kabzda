import React from "react";

export type RaitingType=0 | 1 | 2| 3 | 4 | 5
type RaitingPropsType={
    value:RaitingType
    onClickStar:(value:RaitingType)=>void
}
export function Raiting(props:RaitingPropsType) {
        return   <div>
        <Star selected={props.value >0} onClickStar={props.onClickStar} value={1}/>
        <Star selected={props.value >1} onClickStar={props.onClickStar} value={2}/>
        <Star selected={props.value >2} onClickStar={props.onClickStar} value={3}/>
        <Star selected={props.value >3} onClickStar={props.onClickStar} value={4}/>
        <Star selected={props.value >4} onClickStar={props.onClickStar} value={5}/>

    </div> }


type StarPropsType = {
    selected:boolean
    onClickStar:(value:RaitingType)=>void
    value:RaitingType
}
function Star(props:StarPropsType) {
    return <span onClick={()=>{props.onClickStar(props.value)}}>
        {props.selected ? <b> Star </b> : ' Star '}
        </span>
}
