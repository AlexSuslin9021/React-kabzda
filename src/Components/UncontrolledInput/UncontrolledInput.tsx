import React, {ChangeEvent, useEffect, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue]=useState<string>('')
    const save=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input onChange={save} /> ---{value}
            <UncontrolledInputRef/>
        </div>
    );
};

export const UncontrolledInputRef = () => {
    const [value, setValue]=useState<string>('')
    let inputRef=useRef<HTMLInputElement>(null)
    const save=()=>{
        let el =inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef} /> ---{value}
            <button onClick={save} > add</button>
        </div>
    );
};

export default UncontrolledInput;