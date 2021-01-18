import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';
import TextArea from './index';
import { callback, InputContainer } from '../storyUtils';

addParameters({
  jsx: { skip: 1 },
});

storiesOf('TextArea', module).add('All Knobs', () => {
  let disabled = boolean('disabled', false);
  let required = boolean('required', false);
  let invalid = boolean('invalid', false);
  let optional = boolean('optional', false);
  let label = text('label', 'TextArea Label');

  return (
    <InputContainer>
      <TextArea
        id="textAreaDemo"
        {...(label && { label })}
        {...(disabled && { disabled })}
        {...(required && { required })}
        {...(invalid && { invalid })}
        {...(optional && { optional })}
        onChange={callback(action('onChange'))}
      />
    </InputContainer>
  );
});
