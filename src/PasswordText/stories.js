import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';
import Password from './index';
import { callback, InputContainer } from '../storyUtils';

addParameters({
  jsx: { skip: 2 },
});

storiesOf('Password', module).add('All Knobs', () => {
  let disabled = boolean('disabled', false);
  let required = boolean('required', false);
  let invalid = boolean('invalid', false);
  let label = text('label', 'Password Text Label');
  let placeholder = text('placeholder', 'Enter Password');

  return (
    <>
      <InputContainer>
        <Password
          id="passwordInputDemo"
          {...(label && { label })}
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(invalid && { invalid })}
          {...(placeholder && { placeholder })}
          onChange={callback(action('onChange'))}
        />
      </InputContainer>
    </>
  );
});
