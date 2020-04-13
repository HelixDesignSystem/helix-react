import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import Select from '../Select';
import Tooltip from '../Tooltip';

const id = 'tooltipDemo';

storiesOf('Tooltip', module)
.addDecorator(centered)
.add('Basic', () => {
  const [position, setPosition] = useState('top-left');

  const handleChange = ({ target: { value } }) => {
    setPosition(value);
  };
  
  return (
    <div>
      <hx-icon id={id} type="help-circle" />
      <Tooltip id={id} position={position}>
        Some Message
      </Tooltip>
      <div style={{ marginTop: 100, width: 300 }}>
        <Select id="selectTooltipDemo" label="Position" onChange={handleChange}>
          <option value="top-left">Top Left</option>
          <option value="top-center">Top Center</option>
          <option value="top-right">Top Right</option>
          <option value="right-top">Right Top</option>
          <option value="right-middle">Right Middle</option>
          <option value="right-bottom">Right Bottom</option>
          <option value="bottom-right">Bottom Right</option>
          <option value="bottom-center">Bottom Center</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="left-bottom">Left Bottom</option>
          <option value="left-middle">Left Middle</option>
          <option value="left-top">Left Top</option>
        </Select>
      </div>
    </div>
  );
});
