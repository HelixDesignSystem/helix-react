import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Select from '../Select';

storiesOf('Select', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    let disabled = boolean('disabled', false);
    let label = text('label', '');
    let optional = boolean('optional', false);
    let required = boolean('required', false);

    return (
      <Demo
        {...(disabled && { disabled })}
        {...(label && { label })}
        {...(optional && { optional })}
        {...(required && { required })}
      />
    );
  });

const Demo = (props) => {
  return (
    <div style={{ padding: 25, width: 500 }}>
      <Select label="Select" onChange={action(`selected`)} {...props}>
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
