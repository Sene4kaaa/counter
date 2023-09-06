import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";

const App = () => {

    const [disSetButton, setDisSetButton] = useState<boolean>(false)

    if (disSetButton) {
 return (
     <div>HEllo</div>
 )
    }

    return (
        <div>
            <Counter setDisSetButton={setDisSetButton}/>
        </div>
    )
}

export default App;
