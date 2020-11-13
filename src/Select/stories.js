import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf, addParameters} from '@storybook/react';
import React from 'react';
import Select from '../Select';
import { callback, InputContainer } from '../storyUtils';

addParameters({
  jsx: { skip: 3 },
});

storiesOf('Select', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    let disabled = boolean('disabled', false);
    let optional = boolean('optional', false);
    let required = boolean('required', false);
    return (
      <InputContainer>
        <Select
          id="my-select"
          label="Select Me"
          onChange={callback(action(`selected`))}
          {...(disabled && { disabled })}
          {...(optional && { optional })}
          {...(required && { required })}
        >
          <option value="">--Please choose an option--</option>
          <option value="derp">Some option</option>
          <option value="chirp">Another option</option>
          <option value="slurp">Third option</option>
        </Select>
      </InputContainer>
    );
  });
