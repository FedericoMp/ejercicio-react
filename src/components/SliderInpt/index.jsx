import { useState, useEffect, useId } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './index.css'

const SliderInpt = ({name, min = 0, max = 0, symbol, handleFn}) => {

    const elId = useId()

    const [global, setGlobal] = useState(min); // global value
    const [count, setCount] = useState(min); // counter
    const [input, setInput] = useState(min); // input
    const [err, setErr] = useState(false); // error

    // when updates count or inpt, update global
    useEffect(() => {
        setCount(global);
        setInput(global);
        handleFn(global);
    }, [global])

    // handler count fn, on counter update
    const handleCounter = (e) => {
        setCount(e);
        setGlobal(e);
    }

    // handler input text fn, on input update
    const handleInput = (e) => {
        const textVal = e.target.value; // text input value
        setErr(false); // error false
        if (Number(textVal)) { // validate number value
            if (Number(textVal) < min || Number(textVal) > max) {
                setErr(true);
            }
            setInput(Number(textVal));
            setGlobal(Number(textVal));
        } 
        else { 
            setErr(true);
            setInput(''); }
    }

    return (
        <div id={`SliderInpt${elId}`} className="SliderInptContainer">
            <div className="text-content">
                {name ? <p>{name}</p> : null}
                <div className="amount-container">
                    {symbol ? <span>{symbol}</span> : null}
                    <input 
                        id={`count${elId}`} 
                        type="text" 
                        name={`count${elId}`} 
                        value={input} 
                        onChange={(e) => handleInput(e)}/>
                </div>
            </div>
            {err ? <small>El rango limite es entre {min} y {max}</small> : null}
            <Slider 
                min={min}
                max={max} 
                value={count} 
                onChange={(e) => handleCounter(e)}/>
            <div className="slider-caption">
                <span>{symbol ? <span>{symbol}</span> : null} {min}</span>
                <span>{symbol ? <span>{symbol}</span> : null} {max}</span>
            </div>
        </div>
    )
}

export default SliderInpt