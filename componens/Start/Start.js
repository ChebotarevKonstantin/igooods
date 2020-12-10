import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import style from './Start.module.css'
function Start({ data }) {
  const [modalActive, setModalActive] = useState(false);
  const [state, setState] = useState('')

  return (
    <div >
      <input className={style.divStart} onClick={() => setModalActive(true)} placeholder={state|| 'Найти'} />
      <Modal key={Math.random()} active={modalActive} setActive={setModalActive} data={data} state={state} setState={setState}>
      </Modal>
    </div>
  );
}

export default Start;
