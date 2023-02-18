import React, {useReducer, useState} from "react";
import { reducers, toggleCollapsed} from "./reducers";

type AccordionPropsType={
titleValue:string
    }
function UncontrolAccordion(props:AccordionPropsType) {

 const [store, dispatch]=useReducer(reducers, {collapsed:false})
    console.log('rendered Accordion')
    const onClickHandler=()=>{
     dispatch({type:toggleCollapsed})

    }


    return (
        <div>
            {/*<button onClick={()=>onClickHandler()}>Toggle</button>*/}
            <AccordionTitle title={props.titleValue} onclick={onClickHandler}/>

            {!store.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType={
    title:string
    onclick:()=>void
}
function AccordionTitle(props:AccordionTitlePropsType){

    console.log('rendered AccordionTitle')
    return<h3 onClick={props.onclick} >{props.title}</h3>
}
function AccordionBody(){
    console.log('rendered AccordionBody')
    return( <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}
export default UncontrolAccordion