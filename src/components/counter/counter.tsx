import React, {Dispatch, SetStateAction} from 'react'
import {Button} from '@mui/material'
import s from './counter.module.css'

type Props = {
    value: number
    maxValue: number
    startValue: number
    setValue: Dispatch<SetStateAction<number>>
    setViewSet: Dispatch<SetStateAction<boolean>>
}

export const Counter = (props: Props) => {

    const incrementHandler = () => {
        props.setValue(props.value + 1)
    }

    const resetHandler = () => {
        props.setValue(props.startValue)
    }

    const settingHandler = () => {
        props.setViewSet(true)
    }

    const resToZeroHandler = () => {
        props.setValue(0)
    }

    let valueClass
    if (props.value === props.maxValue) {
        valueClass = s.maxValue
    }

    return (
        <div className={s.container}>
            <div className={`${s.value} ${valueClass}`}>{props.value < 0 || props.startValue === props.maxValue ?
                <h1 className={s.incorrectValue}>Incorrect value!</h1> : <h1>{props.value}</h1>}</div>
            <div>
                <Button
                    onClick={incrementHandler}
                    color={"secondary"}
                    variant={"contained"}
                    disabled={props.value === props.maxValue}
                >inc</Button>
                <Button
                    disabled={props.value === props.startValue}
                    onClick={resetHandler}
                    color={"primary"}
                    variant={"contained"}
                >res</Button>
                <Button
                    onClick={settingHandler}
                    color={"success"}
                    variant={"contained"}
                >settings</Button>
                <Button
                    disabled={props.value === 0 || props.startValue === props.maxValue}
                    onClick={resToZeroHandler}
                    color={"error"}
                    variant={"contained"}
                >res to 0</Button>
            </div>
        </div>
    )
}