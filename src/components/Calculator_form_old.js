import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const CalculatorForm = (props) => {

    const { number1, number2, result } = useSelector(state => state) ;
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value, name } = e.target;
        dispatch({ type: name, number: value });
    }
    // console.log(state);
    return(

        <>
            <div>Number 1 :<input type="text" name="number1" value={number1} onChange={handleChange} /></div>
            <div>Number 2 :<input type="text" name="number2" value={number2} onChange={handleChange} /></div>
            <div><button onClick={() => dispatch({ type: "ADDITION" })}>Addition</button></div>
            <div><button onClick={() => dispatch({ type: "MULTIPLICATION" })}>Multiplication</button></div>
            <div><button onClick={() => dispatch({ type: "RESET" })}>Reset</button></div>
            <p>Resultat : {result}</p>
        </>
    )
}