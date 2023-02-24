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

const Example1=React.memo(Example1M)
const Raiting12=React.memo(Raiting)
const OnOffM=React.memo(OnOff)

function App() {
    let [raiting, setRaiting] = useState<RaitingType>(0)
    let [on, onSet] = useState<boolean>(false)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    const callback = (value: boolean) => {
        onSet(value)
    }
    const [collaps, setCollaps] = useState<boolean>(true)

    return (

        <div className="App">


            {/*<Memo12/>*/}
            {/*<HelpsToReactMemo/>*/}

            {/*<Example1/>*/}
            {/*<Input/>*/}
            {/*<UncontrolledInput/>*/}

            {/*<UncontrolAccordion titleValue={'Menu1'}/>*/}

            {/*<UncontrolledRaiting/>*/}
            < Raiting12 value={raiting} onClickStar={setRaiting}/>
            <Example1/>

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
            {/*< Raiting value={5}/>*/}
            <div>
            <OnOffM on={on} callback={callback}/>
        </div>

        </div>
    );
}

function Title(props: any) {
    return <h1>{props.titleValue}</h1>
}


export default App;
