import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  pop,
  push,
  selectArray
} from './arraySlice';

export function Array() {
  const array = useSelector(selectArray);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState('')

  return (
    <div>
      <p>{array.join(',')}</p>
      <input type="text" onChange={(e) => setFormData(e.target.value)} value={formData} />
      <button onClick={() => dispatch(push(formData))} >push</button>
      <button onClick={() => dispatch(pop())} >pop</button>
    </div>
  );
}
