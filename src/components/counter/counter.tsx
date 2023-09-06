import React, {Dispatch, SetStateAction} from 'react'
import {Button} from '@mui/material'
import s from './counter.module.css'

type Props = {
    value: number
    maxValue: number
    setValue: Dispatch<SetStateAction<number>>
    setViewSet: Dispatch<SetStateAction<boolean>>
}

export const Counter = (props: Props) => {

    const incrementHandler = () => {
        props.setValue(props.value + 1)
    }

    const resetHandler = () => {
        props.setValue(0)
    }

    const settingHandler = () => {
        props.setViewSet(true)
    }

    let valueClass
    if (props.value === props.maxValue) {
        valueClass = s.maxValue
    }

    return (
        <div className={s.container}>
            <div className={`${s.value} ${valueClass}`}><h1>{props.value}</h1></div>
            <div>
                <Button
                    onClick={incrementHandler}
                    color={"secondary"}
                    variant={"contained"}
                    disabled={props.value === props.maxValue}
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