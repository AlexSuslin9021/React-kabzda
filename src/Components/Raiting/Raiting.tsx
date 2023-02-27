import React, {useMemo} from "react";

export type RaitingType=0 | 1 | 2| 3 | 4 | 5
type RaitingPropsType={
    raiting:RaitingType
    onClickStar:(raiting:RaitingType)=>void
}
export function Raiting(props:RaitingPropsType) {
    console.log('Raiting')
        return   <div>
        <Star selected={props.raiting >0} onClickStar={props.onClickStar} raiting={1}/>
        <Star selected={props.raiting >1} onClickStar={props.onClickStar} raiting={2}/>
        <Star selected={props.raiting >2} onClickStar={props.onClickStar} raiting={3}/>
        <Star selected={props.raiting >3} onClickStar={props.onClickStar} raiting={4}/>
        <Star selected={props.raiting >4} onClickStar={props.onClickStar} raiting={5}/>

    </div> }


type StarPropsType = {
    selected:boolean
    onClickStar:(raiting:RaitingType)=>void
    raiting:RaitingType
}

const Star=React.memo(StarM)
function StarM(props:StarPropsType) {
    const onClickStar= useMemo(()=>{
        const onClockStar=()=>{
            props.onClickStar(props.raiting)
        }
        return onClockStar
    },[props.raiting] )
    // const onClockStar=()=>{
    //     props.onClickStar(props.value)
    // }
    return <span onClick={onClickStar}>
        {props.selected ? <b> Star </b> : ' Star '}
        </span>
}
