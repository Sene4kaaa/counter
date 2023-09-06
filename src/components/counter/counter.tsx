import React, {useState} from 'react'
import {Button} from '@mui/material'
import s from './counter.module.css'

export const Counter = () => {

    const [value, setValue] = useState<number>(0)

    const incrementHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(0)
    }

    return (
        <div className={s.container}>
            <div>{value}</div>
            <div>
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
        </div>
    )
}