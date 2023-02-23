import {useState} from "react";

export const Memo1=()=>{

    let [a,setA]=useState<number>(0)
    let [b,setB]=useState<number>(0)
    let resultA=1;
    let resultB=1;
    for(let i=1;i<=a; i++){
      resultA=resultA*i
    }
    for(let i=1;i<=b; i++){
        resultB=resultB*i
    }


    return<>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <div> Result for: {resultA}</div>
        <div> Result for: {resultB}</div>
    </>
}