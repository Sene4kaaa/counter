import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {Button} from "@mui/material";

type Props = {
    startValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    maxValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setViewSet: Dispatch<SetStateAction<boolean>>
    disSetButton: boolean
    setDisSetButton: Dispatch<SetStateAction<boolean>>
}

export const Settings = (props: Props) => {

    const setHandler = () => {
        props.setViewSet(false)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setDisSetButton(false);
        const newVal = +e.currentTarget.value;
        props.setMaxValue(newVal > props.startValue ? newVal : props.startValue);
    }


    return (
        <>
            <div>
                <label>max value:</label>
                <input type={"number"}
                       onChange={onChangeMaxValue}
                       value={props.maxValue}/></div>
            <div>
                <label> start value: </label>
                <input type={"number"} value={props.maxValue}/>
            </div>
            <div>
                <Button
                    onClick={setHandler}
                    color={"success"}
                    variant={"contained"}
                >set</Button>
            </div>
        </>
    )


}