import React from 'react';
import { Dropdown as DropdownComponent } from 'semantic-ui-react';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';


const Dropdown = () => {
  const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
    },
  ];
  return (
    <div className="dropdown">
    <DropdownComponent
    placeholder='Select Friend'
    fluid
    selection
    options={friendOptions}
  />
    </div>
  )
}

export default Dropdown;
