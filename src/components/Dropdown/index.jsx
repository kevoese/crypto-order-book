import React from 'react';
import { Dropdown as DropdownComponent } from 'semantic-ui-react';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';


const Dropdown = ({currencyPair, setSelectValue, loading}) => {
  const data = !loading ? currencyPair.map((element) => (
    {
      key: element.name,
      text: element.description,
      value: element.name,
    }
  )) : [ {
    key: 'fetching',
    text: 'Fetching',
    value: 'fetching',
  }];
 
  return (
    <div className="dropdown">
    <DropdownComponent
    placeholder={loading ? 'Fetching...' : currencyPair[0].description }
    fluid
    selection
    onChange={(e, data) => setSelectValue(data.value)}
    options={data}
  />
    </div>
  )
}

export default Dropdown;
