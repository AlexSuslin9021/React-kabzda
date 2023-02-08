import React from "react";



type AccordionPropsType={
    titleValue:string
   collapsed:boolean
    callback:(value:boolean)=>void

}
function Accordion(props:AccordionPropsType){

    return props.collapsed ?
        <div> <AccordionTitle title={props.titleValue} callback={props.callback}  collapsed={props.collapsed}/> <AccordionBody/></div>
    :
        <div><AccordionTitle title={props.titleValue} callback={props.callback}  collapsed={props.collapsed}/></div>
    }

type AccordionTitlePropsType={
    title:string
    callback:(value:boolean)=>void
    collapsed:boolean
}
function AccordionTitle(props:AccordionTitlePropsType){

    console.log('rendered AccordionTitle')
    return<h3 onClick={()=>props.callback(!props.collapsed)}>{props.title}</h3>
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