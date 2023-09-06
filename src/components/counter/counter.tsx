import React, {useState} from 'react'
import {Button} from "@mui/material"

export const Counter = () => {

    const [value, setValue] = useState<number>(0)

    const incrementHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(0)
    }

    return (
        <div>{value}
            <Button
                onClick={incrementHandler}
                color={"secondary"}
                variant={"contained"}>inc</Button>
            <Button
                onClick={resetHandler}
                color={"primary"}
                variant={"contained"}
            >res</Button>
        </div>
    )
}