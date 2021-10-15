import React, { ChangeEvent } from 'react';
import './select.scss';

interface SelectModel {
  updateData(value: string, name: string): void;
}

const Select: React.FC<SelectModel> = (props) => {
  const { updateData } = props;

  return (
    <label className="select-label" htmlFor="firstName">
      Country:
      <select
        className="select"
        name="country"
        onBlur={(event: ChangeEvent<HTMLSelectElement>) =>
          updateData(event.target.value, 'country')
        }
      >
        <option>Russia</option>
        <option>Ukraina</option>
        <option>Belarus</option>
      </select>
    </label>
  );
};

export default Select;
