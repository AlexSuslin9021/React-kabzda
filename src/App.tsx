import React, {useState} from 'react';
import './App.css';

import Accordion, {AccordionSecret} from "./Components/Accordion/Accordion";
import {Raiting, RaitingType} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolAccordion from "./Components/UncontrolAccordion/UncontrolledAccordion";
import UncontrolledRaiting from "./Components/UncontroledRaiting/UncontrolledRaiting";
import UncontrolledInput from "./Components/UncontrolledInput/UncontrolledInput";
import Input from "./Components/Input/Input";
import {SelectON} from "./Components/SelectOn/SelectOn";
import { Example1M} from "./Components/UseMemo";
import {HelpsToReactMemo, Memo1} from "./Components/HelpsToReactMemo/HelpsToReactMemo";
import {SelectCity} from "./Components/SelectOn/SelectCity";

const Example1=React.memo(Example1M)
const Raiting12=React.memo(Raiting)
const OnOffM=React.memo(OnOff)

function App() {
    let [raiting, setRaiting] = useState<RaitingType>(0)
    let [on, onSet] = useState<boolean>(false)
    // let [collapsed, setCollapsed] = useState<boolean>(true)
    const callback = (check: boolean) => {
        onSet(check)
    }
    // const [collaps, setCollaps] = useState<boolean>(true)
    let [city,setCity]=useState([
        {id:1, city:'Moscow' ,country: 'Russia', population: 12},
        {id:2, city:'Minsk' ,country: 'Belorussia', population: 6},
        {id:3, city:'Kiev' ,country: 'Ukraine', population: 10},
        {id:4, city:'Liverpool' ,country: 'England', population: 5},
        {id:5, city:'NY' ,country: 'USA', population: 15},
        {id:6, city:'Milan' ,country: 'Italy', population: 9},
        {id:7, city:'LA' ,country: 'USA', population: 13},
    ])
let a =  city.filter(el=>el.population>10 && el.city)
let b =city.filter(el=>el.city[0]==='M' && el.city)
let c =city.filter(el=>el.country==="USA" && el.city)



    return (

        <div className="App">

            <SelectCity city={a}/>
            <SelectCity city={b}/>
            <SelectCity city={c}/>

            {/*<Memo12/>*/}
            {/*<HelpsToReactMemo/>*/}

            <Example1/>
            {/*<Input/>*/}
            {/*<UncontrolledInput/>*/}

            {/*<UncontrolAccordion titleValue={'Menu1'}/>*/}

            {/*<UncontrolledRaiting/>*/}
            {/*< Raiting12 raiting={raiting} onClickStar={setRaiting}/>*/}
            {/*<OnOffM on={on} callback={callback}/>*/}
            {/*<Example1/>*/}

            {/*<Title title={"This is App component"}/>*/}
            {/*<Title title={"My friends"}/>*/}
            {/*<SelectON items={[*/}
            {/*    {id: 1, city: 'Minsk'},*/}
            {/*    {id: 2, city: 'London'},*/}
            {/*    {id: 3, city: 'LA'}*/}
            {/*]} onChange={() => setCollaps(!collaps)} collaps={collaps}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={collapsed} callback={setCollapsed} items={[*/}
            {/*    {id: 1, name: 'alex'},*/}
            {/*    {id: 2, name: 'anna'},*/}
            {/*    {id: 3, name: 'dima'}]}/>*/}
            {/*<AccordionSecret titleValue={"Menu"} collapsed={collapsed} callback={setCollapsed} items={[*/}
            {/*    {id: 1, name: 'alex'},*/}
            {/*    {id: 2, name: 'anna'},*/}
            {/*    {id: 3, name: 'dima'}]}/>*/}


            {/*<Accordion titleValue={'List'}   collapsed={false}/>*/}
            {/*< Raiting value={0}/>*/}
            {/*< Raiting value={1}/>*/}
            {/*< Raiting value={2}/>*/}

            {/*< Raiting value={4}/>*/}



        </div>
    );
}

function Title(props: any) {
    return <h1>{props.titleValue}</h1>
}


export default App;
