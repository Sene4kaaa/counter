import React, {useState} from 'react'

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
            <button onClick={incrementHandler}>inc</button>
            <button onClick={resetHandler}>res</button>
        </div>
    )
}