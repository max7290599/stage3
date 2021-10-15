import React, { useState } from 'react';
import { InputModel } from '../../models/input-model';
// import './input.scss';

const Checkbox: React.FC<InputModel> = (props) => {
  const [checked, setChecked] = useState(true);
  const { name, type, updateData } = props;

  const handlerChecked = () => {
    setChecked(!checked);
    updateData(checked, name);
  };

  return (
    <label htmlFor="agree">
      <input type={type} name="agree" onChange={handlerChecked} required />
      This box i agree...
    </label>
  );
};

export default Checkbox;
