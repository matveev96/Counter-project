import React from 'react';
import {UniversalButton} from "./UniversalButton";

type ButtonsProps = {
    counterAdd: () => void;
    counterReset: () => void;
    isDisabled: number;
}

export const Buttons = (props: ButtonsProps) => {
    return (
        <div className="buttons">
            <UniversalButton title={"inc"} onClick={props.counterAdd} className={"universalButton" } isDisabled={props.isDisabled === 5}/>
            <UniversalButton title={"reset"} onClick={props.counterReset} className={"universalButton"} isDisabled={props.isDisabled === 0}/>
        </div>
    );
};

