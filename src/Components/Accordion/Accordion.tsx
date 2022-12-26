import React from "react";
import {monitorEventLoopDelay} from "perf_hooks";


type AccordionPropsType={
    titleValue:string
   collapsed:true |false

}
function Accordion(props:AccordionPropsType){
    console.log('rendered Accordion')
    if (props.collapsed){
        return(
        <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
    )}
    else{
        return(
        <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
        )}

    }





type AccordionTitlePropsType={
    title:string
}
function AccordionTitle(props:AccordionTitlePropsType){

    console.log('rendered AccordionTitle')
    return<h3>{props.title}</h3>
}
function AccordionBody(){
    console.log('rendered AccordionBody')
    return( <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}
export default Accordion