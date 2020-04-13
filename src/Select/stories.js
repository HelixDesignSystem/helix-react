import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Select from '../Select';

storiesOf('Select', module)
.addDecorator(centered)
.add('Basic', () => {
  return (
    <Demo />
  );
})
.add('Disabled', () => {
  return (
    <Demo disabled />
  );
})
.add('Required', () => {
  return (
    <Demo required />
  );
})
.add('Optional', () => {
  return (
    <Demo optional />
  );
})

const Demo = (props) => {
  return (
    <div style={{ padding: 25, width: 500 }}>
      <Select
        label="Select"
        onChange={({ target: { value }}) => console.log(`changed to ${value}`)}
        {...props}
      >
        <Options />
      </Select>
    </div>
  );
};

const Options = () => {
  return (
    <React.Fragment>
      <option value="">--Please choose an option--</option>
      <option value="derp">Some option</option>
      <option value="chirp">Another option</option>
      <option value="slurp">Third option</option>
    </React.Fragment>
  );
};
