import React from 'react';
import {UniversalButton} from "./UniversalButton";
import styled from "styled-components";

type ButtonsProps = {
    counterAdd: () => void;
    counterReset: () => void;
    isDisabled: number;
    maxValue: number;
}

export const Controllers = (props: ButtonsProps) => {
    return (
        <ControllersWrapper>
            <UniversalButton title={"inc"}
                             onClick={props.counterAdd}
                             isDisabled={props.isDisabled === props.maxValue}/>
            <UniversalButton title={"reset"}
                             onClick={props.counterReset}
                             isDisabled={props.isDisabled === 0}/>
        </ControllersWrapper>
    );
};

const ControllersWrapper = styled.div`
    margin: 20px 0;
    width: 80%;
    height: 30%;
    border: 3px solid cornflowerblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

