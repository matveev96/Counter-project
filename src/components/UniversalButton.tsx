import React from 'react';

type UniversalButtonPropsType = {
    onClick: () => void;
    title: string;
    isDisabled: boolean;
    className: string;
}

export const UniversalButton = ({onClick, title, isDisabled, className}: UniversalButtonPropsType) => {

    if (isDisabled) {
        className = "universalButtonNonActive"
    }

    return (
        <button disabled={isDisabled} onClick={onClick} className={className}> {title}</button>
    );
};

