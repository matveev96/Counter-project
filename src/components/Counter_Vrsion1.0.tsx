import React, {useState} from 'react';
import {Window} from "./Window";
import {Controllers} from "./Controllers";
import styled from "styled-components";

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const maxVal = 5;

    const counterAdd = () => {
        if(count < maxVal) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(0)
    }

    return (
        <CounterWrapper>
            <Window value={count} maxValue={maxVal}/>
            <Controllers counterAdd={counterAdd} counterReset={counterReset} isDisabled={count} maxValue={maxVal}/>
        </CounterWrapper>
    );
};

const CounterWrapper = styled.div`
    width: 30vw;
    height: 60vh;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

