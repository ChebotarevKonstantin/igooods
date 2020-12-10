import React from 'react';
import Form from '../Form/Form'
function List({ state, res, }) {
  return (
    <div>
      {state ? res && res.map((obj) => <Form key={Math.random()} obj={obj} />) : null}
    </div>
  );
}

export default List;
