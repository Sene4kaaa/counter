import React, {useState} from 'react'

export const Counter = () => {

    const [value, setValue] = useState<number>(0)

    return (
        <div>{value}</div>
    )
}