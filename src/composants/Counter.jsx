import { useState } from "react";
import PropTypes from 'prop-types';

function Counter(props){
    const {initialCount,Step}=props;
    const [count,setCount]=useState(initialCount);
    function Increment(){
        setCount(count+Step);
    }
    function Decrement(){
        setCount(count-Step);
    }
    function Reset(){
        setCount(initialCount);
    }
    return(
        <>
        <h1>Compteur:{count}</h1>
        <button onClick={Increment}>+{Step}</button>
        <button onClick={Decrement}>-{Step}</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}

Counter.propTypes = {
    initialCount: PropTypes.number.isRequired,
    Step: PropTypes.number.isRequired,
};

Counter.defaultProps = {
    initialCount: 0,
    Step: 1,
};
export default Counter;