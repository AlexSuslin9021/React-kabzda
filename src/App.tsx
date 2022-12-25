import React from 'react';
import './App.css';
import {findRenderedComponentWithType} from "react-dom/test-utils";

function App() {
    console.log('rendered App')
  return (
    <div className="App">
        <Title/>
        < Raiting/>
        <Accordion/>
        < Raiting/>

    </div>
  );
}
function Title(){
    return <>This is App component</>
}

function Raiting(){
    console.log('rendered Raiting')
    return(
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>

        </div>
    )
}
function Accordion(){
    console.log('rendered Accordion')
    return(
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(){
    console.log('rendered AccordionTitle')
    return<h3>Menu</h3>
}
function AccordionBody(){
    console.log('rendered AccordionBody')
   return( <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>)
}

function Star(){
    console.log('rendered Star')
    return <div>star</div>
}
export default App;
