import React, {useState} from "react";
import {monitorEventLoopDelay} from "perf_hooks";


type AccordionPropsType={
    titleValue:string
   // collapsed:true |false

}
function UncontrolAccordion(props:AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    console.log('rendered Accordion')
    const onClickHandler=()=>{
       if(collapsed===true) setCollapsed(false)
        if(collapsed===false) setCollapsed(true)

    }


    return (
        <div>
            <button onClick={()=>onClickHandler()}>Toggle</button>
            <AccordionTitle title={props.titleValue}/>

            {collapsed! && <AccordionBody/>}
        </div>
    )
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
export default UncontrolAccordion