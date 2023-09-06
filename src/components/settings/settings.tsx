import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button} from "@mui/material";

type Props = {
    setDisSetButton: Dispatch<SetStateAction<boolean>>
}

export const Settings = (props: Props) => {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(100)

    const setHandler = ()=> {
        props.setDisSetButton(false)
    }

    return (
        <div>
          <input value={minValue}/>
          <input value={maxValue}/>
            <Button
                onClick={setHandler}
                color={"success"}
                variant={"contained"}
            >settings</Button>
        </div>
    )


}