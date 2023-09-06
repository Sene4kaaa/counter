import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Settings} from "./components/settings/settings";

const App = () => {

    const [disSetButton, setDisSetButton] = useState<boolean>(false)

    if (disSetButton) {
        return (
            <div><Settings/></div>
        )
    }

    return (
        <div>
            <Counter setDisSetButton={setDisSetButton}/>
        </div>
    )
}

export default App;
