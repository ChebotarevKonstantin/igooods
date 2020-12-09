import React, { useState } from 'react';
import Button from '../Button/Button';
import style from './Form.module.css'

function Form({ obj }) {

  const [state, setState] = useState(0)
  const handleAdd = () => {
    setState((prev) => prev + 1)
  };
  const handleRemove = () => {
    setState((prev) => prev - 1)
  };

  return (
    <div className={style.div}>
      <div className={style.div2}>{obj.name},  {obj.username},  {obj.email}
      </div>
      {!state ? <div><Button children={"В корзину"} onClick={() => handleAdd()} className={"btnAdd"} /> </div> :
        <div className={style.cart}>
          <Button
            className={"button"}
            onClick={() => handleRemove()}>  -  </Button>
          <b> {state} </b>
          <Button
            className={"button"}
            onClick={() => handleAdd()}> + </Button>
        </div>}
    </div>
  );
}

export default Form;
