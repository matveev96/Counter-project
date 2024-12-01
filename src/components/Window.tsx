import React from 'react';
import styled from "styled-components";

type WindowProps = {
    value: number;
    maxValue: number;
}

export const Window = (props: WindowProps) => {
    return (
        <WindowStyled>
            <MaxValue>Max value: {props.maxValue}</MaxValue>
            <WindowNumber value={props.value} maxValue={props.maxValue}>{props.value}</WindowNumber>
            <MaxLine value={props.value} maxValue={props.maxValue}></MaxLine>
        </WindowStyled>
    );
};


const WindowStyled = styled.div`
    margin-top: 20px;
    width: 80%;
    height: 50%;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    background-color: aqua;
    color: black;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const MaxValue = styled.span`
    font-size: 30px;
`

const WindowNumber = styled.span<{ value: number, maxValue: number }>`
    font-size: 80px;
    color: ${props => props.value === props.maxValue ? 'red' : 'black'};
`

const MaxLine = styled.span<{ value: number, maxValue: number }>`
    width: 80%;
    height: 5px;
    border: 2px solid violet;
    position: relative;
    
    &::before {
        content: '';
        transition: .2s ease-in-out;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.value / props.maxValue * 100}%;
        background-color: brown;
        position: absolute;
    }
`



