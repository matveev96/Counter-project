import React from 'react';
import './App.css';
import {Counter} from "./components/Counter_Vrsion1.0";
import styled from "styled-components";
import {CounterNext} from "./components/Counter_Version1.1";

function App() {

    return (
        <AppStyled>
            <Counter/>
            <CounterNext/>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: dimgrey;
`

export default App;
