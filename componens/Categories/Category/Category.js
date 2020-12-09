import React from 'react';
import style from './Category.module.css'

function Category({ obj }) {
  return (
    <>
    <span className={style.span}>{obj.name}</span>
  
    </>
  );
}

export default Category;
