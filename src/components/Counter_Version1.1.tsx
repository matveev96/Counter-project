import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Controllers} from "./Controllers";
import {Window} from "./Window";

export const CounterNext = () => {

    const [count, setCount] = useState<number>(0)

    const min = Math.ceil(1);
    const max = Math.floor(10);
    const randomNum = Math.floor(Math.random() * (max - min) + min)

    const randomRef =useRef<number>(randomNum)

    const counterAdd = () => {
        if(count < randomRef.current) {
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
                    maxValue={randomRef.current}/>
            <Controllers counterAdd={counterAdd}
                         counterReset={counterReset}
                         isDisabled={count}
                         maxValue={randomRef.current}/>
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