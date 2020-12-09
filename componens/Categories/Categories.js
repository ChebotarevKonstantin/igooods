import React from 'react';
import Category from './Category/Category';

function Categories({ state, res }) {
  return (
    <div>
      {state ? res && res.map((obj) => <Category key={obj.id} obj={obj} />) : null}
      {state ? <hr></hr>: null}
    </div>
  );
}

export default Categories;
