import {useState} from "react";
type cityTypeProps={
    id:number, city:string ,country: string, population: number
}
type cityType={
    city:cityTypeProps[]
}
export const SelectCity  = (props:cityType) => {

    console.log('a')
    return (<>

        <select >

            {props.city.map((c)=> {
                return <option key={c.id} >{ c.city }</option>
            })
            }
        </select>


            {/*<select >*/}
            {/*    {props.city.map((c)=> {*/}
            {/*        if(c.city[0]==='M')*/}
            {/*            return <option >{ c.city }</option>*/}

            {/*    })*/}
            {/*    }*/}
            {/*</select>*/}
            {/*<select >*/}
            {/*    {props.city.map((c)=> {*/}
            {/*        if(c.country==="USA")*/}
            {/*            return <option >{ c.city }</option>*/}

            {/*    })*/}
            {/*    }*/}
            {/*</select>*/}
        </>
    );
};

// const  SelectC=(props:  {cit:string})=>{
//     return <select name="" id="">
//         <option value=""> {props.cit}</option>
//
//     </select>
// }