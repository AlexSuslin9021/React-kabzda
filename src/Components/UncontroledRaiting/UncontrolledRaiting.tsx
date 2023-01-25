import React, {useState} from "react";

type RaitingPropsType={
    value: number
}
export function UncontrolledRaiting() {
    console.log('rendered Raiting')
   let[value, setValue]=useState<number>(1)
    // const onClickHandler= (value:number)=>{
    //  setValue(value)
    // }
        return   <div>
        <Star selected={value >0 } onClick={()=>{setValue(1)}}/>
        <Star selected={value >1} onClick={()=>setValue(2)}/>
        <Star selected={value >2} onClick={()=>setValue(3)}/>
        <Star selected={value >3} onClick={()=>setValue(4)}/>
        <Star selected={value >4} onClick={()=>setValue(5)}/>

    </div> }


type StarPropsType = {
    selected:boolean

    onClick:()=>void
}
function Star(props:StarPropsType) {

  // return  props.selected ? <span ><b> Star </b> </span> : <span > Star </span>
   return   <span  onClick={()=>{props.onClick()}}> {props.selected ? <b>Star</b> : 'Star'} </span>

}
export default UncontrolledRaiting