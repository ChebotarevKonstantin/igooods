import React from 'react';
import Input from '../Input/Input';

export default function Modal({state, setState, data, active, setActive, children }) {

  return (
    <div  className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
    <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
   {children}
        <Input state={state} setState={setState} data={data}/>
      </div>
    </div>

  )
}




