import React, { useState } from 'react';
import Button from '../Button/Button';
import style from './Form.module.css'

function Form({ obj }) {

  const [state, setState] = useState(0)
  const [stateTotPrice, setStateTotPrice] = useState(0)

  const handleAdd = () => {
    setState((prev) => prev + 1)
    setStateTotPrice((prev) => prev + obj.price)
  };
  const handleRemove = () => {
    setState((prev) => prev - 1)
    setStateTotPrice((prev) => prev - obj.price)

  };

  return (
    <div className={style.div}>
      <div className={style.div2}>{obj.name}, {obj.shop}
      </div>

<div className={style.cart}>
      <div className={style.price}>{obj.price + ` p `} </div>
      {!state ? <div className={style.btn}><Button  children={"В корзину"} onClick={() => handleAdd()} className={"btnAdd"} /> </div> :
       
       <div>
             
       <div className={style.btn}>
          <Button 
            className={"button"}
            onClick={() => handleRemove()}>  -  </Button>
          <b> {` ` + state + ` шт.`}  </b>
          <Button 
            className={"button"}
            onClick={() => handleAdd()}> + </Button>
        </div>
        <div className={style.btn}> {`Итого: ` + stateTotPrice + ` p `}</div>
        </div>}
        </div>

     </div>
  );
}

export default Form;
