import React, { useState } from 'react';
import { InputModel } from '../../models/input-model';

import './switch.scss';

const Switch: React.FC<InputModel> = (props) => {
  const [checked, setChecked] = useState(true);
  const { name, type, updateData } = props;

  const handlerChecked = () => {
    setChecked(!checked);
    updateData(checked, name);
  };

  return (
    <div className="switch-container">
      <p>I want to receive notifications</p>
      <label className="switch" htmlFor={name}>
        <input className="switch-input" name={name} type={type} onChange={handlerChecked} />
        <span className="switch-label" data-on="Yes" data-off="No" />
        <span className="switch-handle" />
      </label>
    </div>
  );
};

export default Switch;
