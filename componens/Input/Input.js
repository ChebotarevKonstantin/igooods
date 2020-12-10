import React from 'react';
import { useEffect, useRef, useState } from 'react'
import Categories from '../Categories/Categories';
import List from '../List/List'
import style from './Input.module.css'


function Input({data, state, setState} ) {
  const inp = useRef()
  useEffect(() => { inp.current.focus() }, [])
  const [res, setRes] = useState(null)
  const clickHandler = () => {
    setState(() => "")
  }
  useEffect(() => {
    setRes(() => data.data.filter(obj => {

      let res = false;
      let keysArr = Object.keys(obj);
      keysArr.forEach(key => {
        if (typeof obj[key] !== 'object' && typeof obj[key] !== 'number') {
          if (obj[key].toLowerCase().includes(state.toLowerCase())) {
            res = true
          }
        }
      })
      return res
    }))
  }, [state])

  return (
    <div>
      <input className={style.input} ref={inp} onChange={(e) => {
        setState(e.target.value)
      }} value={state} placeholder='Найти' />
      {state ? <button className={style.button} onClick={clickHandler} >X</button> : null}
      <Categories key={Math.random()*Math.random()} state={state} res={res} />
      <List state={state} res={res} />
    </div>
  );
}

export default Input;
