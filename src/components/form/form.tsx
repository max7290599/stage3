import React, { FormEvent, useState } from 'react';
import { CardModel } from '../../models/card-model';
import { StateModel } from '../../models/input-model';
import Checkbox from '../checkbox/checkbox';
import Input from '../input/input';
import Select from '../select/select';
import Switch from '../switch/switch';
import './form.scss';

const Form: React.FC<StateModel> = (props) => {
  const [dataForm, setDataForm] = useState<CardModel>({
    firstName: '',
    lastName: '',
    country: 'Russia',
    birthDate: '',
    postDate: '',
    mail: false,
    agree: false,
  });

  const cancelCourse = () => {
    (document.getElementById('form') as HTMLFormElement).reset();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.setCards((state: StateModel[]) => [...state, dataForm]);
    cancelCourse();
  };

  const updateData = (value: boolean | string, name: string): void => {
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <form
      id="form"
      className="form"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        handleSubmit(event);
        cancelCourse();
      }}
    >
      <Input type="text" name="firstName" updateData={updateData} />
      <Input type="text" name="lastName" updateData={updateData} />
      <Input type="date" name="birthDate" updateData={updateData} />
      <Input type="date" name="postDate" updateData={updateData} />
      <Select updateData={updateData} />
      <Checkbox type="checkbox" name="agree" updateData={updateData} />
      <Switch type="checkbox" name="mail" updateData={updateData} />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
