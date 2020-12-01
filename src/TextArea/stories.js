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
  let optional = boolean('optional', false);

  return (
    <InputContainer>
      <TextArea
        id="textAreaDemo"
        lable="Comments"
        {...(disabled && { disabled })}
        {...(required && { required })}
        {...(optional && { optional })}
        onChange={callback(action('onChange'))}
      />
    </InputContainer>
  );
});
