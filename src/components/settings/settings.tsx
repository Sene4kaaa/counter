import React, {useState} from 'react';

export const Settings = () => {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(100)

    return (
        <div>
            {minValue}
            {maxValue}
        </div>
    )
}