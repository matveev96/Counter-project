import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Controllers} from "./Controllers";
import {Window} from "./Window";

export const Counter = () => {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    let randomNum = Math.floor(Math.random() * (max - min) + min)

    const [count, setCount] = useState<number>(0)
    const randomRef =useRef<number>(randomNum)

    useEffect(() => {
        const valueToString = localStorage.getItem("counter");
        if (valueToString) {
            const valueToNum = JSON.parse(valueToString)
            setCount(valueToNum)
            randomNum = valueToNum
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(count));
    }, [count]);

    const currentRandomValue = randomRef.current;

    const counterAdd = () => {
        if(count < currentRandomValue) {
            setCount(count + 1)
        }
    }

    const counterReset = () => {
        setCount(0)
        randomRef.current = randomNum
    }

    return (
        <CounterWrapper>
            <Window value={count}
                    maxValue={currentRandomValue}/>
            <Controllers counterAdd={counterAdd}
                         counterReset={counterReset}
                         isDisabled={count}
                         maxValue={currentRandomValue}/>
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