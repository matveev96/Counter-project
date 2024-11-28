import React from 'react';

type WindowProps = {
    counterNum: number;
    maxNum: number;
}


export const Window = (props: WindowProps) => {
    return (
        <div className="window">
            <h3 className={props.maxNum === 5 ? "windowNum" : ""}>{props.counterNum}</h3>
        </div>
    );
};

