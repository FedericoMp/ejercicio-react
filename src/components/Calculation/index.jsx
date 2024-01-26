import React from 'react'
import './index.css'

const Calculation = ({title, amount, duration, handleFn}) => {

    // Calculate value
    const resultCalc = (amount, duration) => {
        let res = 0;
        if (amount > 0 && duration > 0) {
            res = Intl.NumberFormat().format((amount/duration).toFixed(2));
        }
        // handle value to parent component
        handleFn(res);
        return res;
    }

    return (
        <div id="Calculation">
            {title ? <p className="text-caption">{title}</p> : null}
            <p className="result">$ {resultCalc(amount, duration)}</p>
      </div>
    )
}

export default Calculation