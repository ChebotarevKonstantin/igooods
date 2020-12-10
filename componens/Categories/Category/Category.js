import React from 'react';
import style from './Category.module.css'

function Category({ obj }) {
  return (
    <>
      <span className={style.span}>{obj.category}</span>
    </>
  );
}

export default Category;
