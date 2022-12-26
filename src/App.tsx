import React from 'react';
import './App.css';
// import {findRenderedComponentWithType} from "react-dom/test-utils";
import Accordion from "./Components/Accordion/Accordion";
import {Raiting} from "./Components/Raiting/Raiting";

function App() {
    console.log('rendered App')

  return (

    <div className="App">
        <Title title ={"This is App component"}/>
        <Title title ={"My friends"}/>

        <Accordion titleValue={"Menu"}  collapsed={true}/>
        <Accordion titleValue={'List'}   collapsed={false}/>
        < Raiting value={0}/>
        < Raiting value={1}/>
        < Raiting value={2}/>
        < Raiting value={3}/>
        < Raiting value={4}/>
        < Raiting value={5}/>


    </div>
  );
}
function Title(props:any){
    return <h1>{props.titleValue}</h1>
}


export default App;
