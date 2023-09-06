import React, {Dispatch, SetStateAction, useState} from 'react'
import {Button} from '@mui/material'
import s from './counter.module.css'

const startValue = 0
const maxValue = 5

type Props = {
    setDisSetButton: Dispatch<SetStateAction<boolean>>
}

export const Counter = (props: Props) => {

    const [value, setValue] = useState<number>(startValue)


    const incrementHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(0)
    }

    const settingHandler = () => {
        props.setDisSetButton(true)
    }

    let valueClass
    if (value === maxValue) {
        valueClass = s.maxValue
    }

    return (
        <div className={s.container}>
            <div className={`${s.value} ${valueClass}`}><h1>{value}</h1></div>
            <div>
                <Button
                    onClick={incrementHandler}
                    color={"secondary"}
                    variant={"contained"}
                    disabled={value === maxValue}
                >inc</Button>
                <Button
                    onClick={resetHandler}
                    color={"primary"}
                    variant={"contained"}
                >res</Button>
                <Button
                    onClick={settingHandler}
                    color={"success"}
                    variant={"contained"}
                >settings</Button>
            </div>
        </div>
    )
}