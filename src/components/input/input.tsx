import React, { ChangeEvent } from 'react';
import { InputModel } from '../../models/input-model';
import './input.scss';

const Input: React.FC<InputModel> = (props) => {
  const { name, type, updateData } = props;

  return (
    <label className="label" htmlFor={name}>
      {name}
      <input
        type={type}
        name={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => updateData(event.target.value, name)}
        required
      />
    </label>
  );
};

export default Input;
