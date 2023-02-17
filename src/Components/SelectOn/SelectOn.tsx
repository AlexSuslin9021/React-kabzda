import React, {FC, useState} from "react";

type valueType= 'Minsk' | 'London' | 'LA'


type itemsType={
    id:number,
    city:valueType
}
type SelectPropsType ={

    onChange:()=>void
    items: itemsType[]
    collaps:boolean
}
export const SelectON : FC<SelectPropsType > = (props ) => {
    const[value, setValue]=useState<valueType>('Minsk')

    return (<>
        <div onClick={props.onChange}> {value}</div>

            { props.collaps ? props.items.map(i=><div key={i.id} onClick={()=>{setValue(i.city)
                props.onChange()
            }} >{ i.city}</div>) :<div></div>}

        </>
    );
};