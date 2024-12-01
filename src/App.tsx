import React from 'react';
import './App.css';
import styled from "styled-components";
import {Counter} from "./components/Counter";

function App() {

    return (
        <AppStyled>
            <Counter/>
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
