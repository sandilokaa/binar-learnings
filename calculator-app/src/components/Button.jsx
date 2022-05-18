import React from "react";

import { ACTIONS } from "../libs/const";

export default function Button(props) {
    const {valueOne, valueTwo, setResult, action, text} = props;

    const sum = () => {
        const valueOneInt = parseInt(valueOne.current.value);
        const valueTwoInt = parseInt(valueTwo.current.value);
        setResult(valueOneInt + valueTwoInt);
    };

    const min = () => {
        const valueOneInt = parseInt(valueOne.current.value);
        const valueTwoInt = parseInt(valueTwo.current.value);
        setResult(valueOneInt - valueTwoInt);
    };

    const multiply = () => {
        const valueOneInt = parseInt(valueOne.current.value);
        const valueTwoInt = parseInt(valueTwo.current.value);
        setResult(valueOneInt * valueTwoInt);
    };

    return (
        <button
            onClick={() => {
                if (action === ACTIONS.SUM) return sum();
                else if (action === ACTIONS.MIN) return min();
                else if (action === ACTIONS.MULTIPLY) return multiply();
            }}
        >
            {text}
        </button>
    );
}