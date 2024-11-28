import React, {useState} from 'react';
import {Window} from "./Window";
import {Buttons} from "./Buttons";

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const counterAdd = () => {
        if(count < 5) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(0)
    }

    return (
        <div className="counter">
            <Window counterNum={count} maxNum={count}/>
            <Buttons counterAdd={counterAdd} counterReset={counterReset} isDisabled={count}/>
        </div>
    );
};

