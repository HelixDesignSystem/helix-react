import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Text from './index';
import { InputContainer } from '../storyUtils';

storiesOf('Text', module).add('All Knobs', () => {
  let disabled = boolean('disabled', false);
  let required = boolean('required', false);
  let optional = boolean('optional', false);
  let prefix = text('prefix', '@');
  let suffix = text('suffix', '.example.com');

  return (
    <>
      <InputContainer>
        <Text
          id="textDemo"
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(optional && { optional })}
          label="Username"
          onChange={action('onChange')}
        />
      </InputContainer>

      <h3>Prefix</h3>
      <InputContainer>
        <Text
          id="textDemo1"
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(optional && { optional })}
          {...(prefix && { prefix })}
          label="twitter handle"
          onChange={action('onChange')}
        />
      </InputContainer>

      <h3>Suffix</h3>
      <InputContainer>
        <Text
          id="textDemo2"
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(optional && { optional })}
          {...(suffix && { suffix })}
          label="Subdomain"
          onChange={action('onChange')}
        />
      </InputContainer>
    </>
  );
});
