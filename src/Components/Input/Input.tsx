import React, {ChangeEvent, useState} from 'react';

export const Input = () => {
     const[value, setValue]=useState<string>('')
    const save=(e:ChangeEvent<HTMLInputElement>)=>{
         setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input onChange={save} value={value}/>
            <Inputcheck/>
            <SelectON/>
        </div>
    );
};
const Inputcheck = () => {
    const[value, setValue]=useState<boolean>(true)
    const save=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type={"checkbox"} onChange={save} checked={value}/>
        </div>
    );
};
const SelectON = () => {
    const[value, setValue]=useState<string>('4')
    const save=(e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <select value={value} onChange={save}>
                <option > none</option>
                <option value="2">Moscow</option>
                <option value="3">Minsk</option>
                <option value="4">kiev</option>
            </select>
        </div>
    );
};

export default Input;