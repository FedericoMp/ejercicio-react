import React, { useState } from 'react'
import './App.css'

// Components
import SliderInpt from './components/SliderInpt/index'
import Calculation from './components/Calculation/index'
import ModalBtn from './components/ModalBtn/index'

function App() {

  // slider input amount values
  const minAmount = 5000;
  const maxAmount = 50000;
  const [amount, setAmount] = useState(minAmount);

  // slider input duration values
  const minDuration = 3;
  const maxDuration = 24;
  const [duration, setDuration] = useState(minDuration);
  
  // total value
  const [total, setTotal] = useState(0);

  // handlers
  const handleAmount = (v) => setAmount(v);
  const handleDuration = (v) => setDuration(v);
  const handleTotal = (v) => setTotal(v);

  return (
    <div id="AppContainer">
      <h2>Simulá tu crédito</h2>
      <SliderInpt 
          id="Slider1" 
          name={"Monto total"} 
          min={minAmount} 
          max={maxAmount}
          symbol={"$"} 
          handleFn={(v) => handleAmount(v)}/>
      <SliderInpt 
          id="Slider2" 
          name={"Plazo"} 
          min={minDuration} 
          max={maxDuration} 
          handleFn={(v) => handleDuration(v)}/>
      <Calculation
        title={"Cuota fija por mes:"} 
        amount={amount}
        duration={duration}
        handleFn={(v) => handleTotal(v)}/>
      <div id="CtaAction">
        <ModalBtn 
          buttonClassName={"credit"}
          buttonText={"Obtener crédito"}
          modalTitle={"!Crédito obtenido con éxito¡"}/>
        <ModalBtn 
          buttonClassName={"fee"}
          buttonText={"Ver detalle de cuotas"}
          modalTitle={"Detalles"}
          modalMsg={`Tu crédito tiene un valor total de $${amount} y contas con el financiamiento de ${duration} cuotas de $${total}.`}/>
      </div>
    </div>
  )
}

export default App
