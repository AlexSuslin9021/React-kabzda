import React, {useState} from "react";



type AccordionPropsType={
    titleValue:string
   // collapsed:true |false

}
function UncontrolAccordion(props:AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    console.log('rendered Accordion')
    const onClickHandler=()=>{
       if(collapsed) setCollapsed(false)
        if(!collapsed) setCollapsed(true)

    }


    return (
        <div>
            {/*<button onClick={()=>onClickHandler()}>Toggle</button>*/}
            <AccordionTitle title={props.titleValue} onclick={onClickHandler}/>

            {collapsed! && <AccordionBody/>}
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