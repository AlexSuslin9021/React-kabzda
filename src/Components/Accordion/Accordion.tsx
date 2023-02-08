import React from "react";
import {log} from "util";

type itemsType={
id:number,
    name:string
}


type AccordionPropsType={
    titleValue:string
   collapsed:boolean
    callback:(value:boolean)=>void
    items: itemsType[]

}
function Accordion(props:AccordionPropsType){

    return props.collapsed ?
        <div> <AccordionTitle title={props.titleValue} callback={props.callback}  collapsed={props.collapsed}/> <AccordionBody onClick={()=>{}} items={props.items}/></div>
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

type AccordionBodyProps={
    items: itemsType[]
    onClick:()=>void
}
function AccordionBody(props:AccordionBodyProps){
    console.log('rendered AccordionBody')

    return( <ul>
        {props.items.map(i=><li onClick={()=>console.log(i.id)} key={i.id} >{i.name}</li>)}
    </ul>)
}
export default Accordion