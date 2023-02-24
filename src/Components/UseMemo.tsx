import React, {useState} from "react";


const Counter1Memo = (props: { counter: number }) => {
    // console.log('Counter1')
    return <>
        <div>{props.counter}</div>
    </>
}

type usersAr = {
    users: string[]
}
const UsersArMemo = (props: usersAr) => {
    // console.log('UsersAr')
    return <> {props.users.map((el, index) => <div key={index}>{el}</div>)}
    </>
}
const UsersAr=React.memo(UsersArMemo)
const Counter1=React.memo(Counter1Memo)

export const Example1M = () => {
    console.log('Example1')
    let [counter, setCounter] = useState(0
    )
    let [users, SetUsers] = useState(['alex', 'anton', 'Dima'])

    return <>
        <Counter1 counter={counter}/>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <button onClick={() => SetUsers([...users, 'Anna'])}> Add user</button>
        <UsersAr users={users}/>
    </>
}


// import React, {useMemo, useState} from "react";
//
// export const Memo1 = () => {
//
//     let [a, setA] = useState<number>(0)
//     let [b, setB] = useState<number>(0)
//     let resultA = 1;
//     let resultB = 1;
//
//     // useMemo сделай вычисления, которые в функции и запомни их, до тех пор пока а не поменяется. Если а поменяется, то перересуй
//     //если нет верни, что было
//     // основная задача предотвращать чрезмерное напряжение, которое приводит к задержкам
//     resultA = useMemo(() => {
//         let tempResultA=1
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 1000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResultA = tempResultA * i
//         }
//         return tempResultA
//     }, [a])
//     // for(let i=1;i<=a; i++){
//     //     let fake=0
//     //     while(fake<1000){
//     //         fake++
//     //       const fakeValue=Math.random()
//     //     }
//     //   resultA=resultA*i
//     // }
//
//     for (let i = 1; i <= b; i++) {
//         resultB = resultB * i
//     }
//
//
//     return <>
//         <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
//         <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
//         <div> Result for: {resultA}</div>
//         <div> Result for: {resultB}</div>
//     </>
// }
//
// type UserSecretTupe={
//     users: string[]
// }
// export const UserSecret=(props:UserSecretTupe)=>{
//     console.log('User Secret')
//     return<div>
//         {props.users.map(el=><div> {el}</div>)}
//     </div>
// }
// const Users=React.memo(UserSecret)


// export const HelpsToReactMemo=()=>{
//     console.log('Helps To React Memo')
//     const[counter, setCounter]=useState(0)
//     const[users, setUsers]= useState(['alex', 'Anton','Anna', 'Nikit'])
// const addUser=()=>{
//     setUsers([...users, 'Sveta'+ new Date().getTime() ])
// }
// const newArray= useMemo(()=> {
//     const newUser = users.filter(el => el.toLowerCase().indexOf('a') > -1)
//     return newUser
// },[])
//     // setUsers(newUser)
// // users.push('Sveta'+ new Date().getTime())
//     return<div>
//
//         <button onClick={()=>(setCounter(counter+1))}>counter</button>
//         <div>{counter}</div>
//         <button onClick={addUser}>Add User</button>
//         <Users users={newArray}/>
//     </div>

