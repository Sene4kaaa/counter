import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/counter";
import {Settings} from "./components/settings/settings";

const App = () => {

    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [disSetButton, setDisSetButton] = useState<boolean>(false)
    const [viewSet, setViewSet] = useState<boolean>(false);

    if (viewSet) {
        return (
            <div><Settings
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setViewSet={setViewSet}
                disSetButton={disSetButton}
                setDisSetButton={setDisSetButton}
            /></div>
        )
    }

    return (
        <div>
            <Counter
                value={value}
                maxValue={maxValue}
                setValue={setValue}
                setViewSet={setViewSet}/>
        </div>
    )
}

export default App;
