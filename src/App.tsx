import React from 'react';
import './App.css';
// import {findRenderedComponentWithType} from "react-dom/test-utils";
import Accordion from "./Components/Accordion/Accordion";
import {Raiting} from "./Components/Raiting/Raiting";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolAccordion from "./Components/UncontrolAccordion/UncontrolledAccordion";
import UncontrolledRaiting from "./Components/UncontroledRaiting/UncontrolledRaiting";

function App() {
    console.log('rendered App')

  return (

    <div className="App">
        <UncontrolAccordion titleValue={'Menu1'}/>

        <UncontrolledRaiting />
        {/*<Title title ={"This is App component"}/>*/}
        {/*<Title title ={"My friends"}/>*/}

        {/*<Accordion titleValue={"Menu"}  collapsed={true}/>*/}
        {/*<Accordion titleValue={'List'}   collapsed={false}/>*/}
        {/*< Raiting value={0}/>*/}
        {/*< Raiting value={1}/>*/}
        {/*< Raiting value={2}/>*/}
        < Raiting value={3}/>
        {/*< Raiting value={4}/>*/}
        {/*< Raiting value={5}/>*/}
        <OnOff on={true}/>


    </div>
  );
}
function Title(props:any){
    return <h1>{props.titleValue}</h1>
}


export default App;
