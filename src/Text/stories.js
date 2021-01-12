import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';
import Text from './index';
import { callback, InputContainer } from '../storyUtils';

addParameters({
  jsx: { skip: 2 },
});

storiesOf('Text', module).add('All Knobs', () => {
  let disabled = boolean('disabled', false);
  let required = boolean('required', false);
  let invalid = boolean('invalid', false);
  let optional = boolean('optional', false);
  let label = text('label', 'Text Label');
  let prefix = text('prefix', '@');
  let suffix = text('suffix', '.example.com');

  return (
    <>
      <InputContainer>
        <Text
          id="textDemo"
          {...(label && { label })}
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(invalid && { invalid })}
          {...(optional && { optional })}
          onChange={callback(action('onChange'))}
        />

        <br />
        <h3>Prefix</h3>
        <Text
          id="textDemo1"
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(optional && { optional })}
          {...(prefix && { prefix })}
          label="twitter handle"
          onChange={callback(action('onChange'))}
        />

        <br />
        <h3>Suffix</h3>
        <Text
          id="textDemo2"
          {...(disabled && { disabled })}
          {...(required && { required })}
          {...(optional && { optional })}
          {...(suffix && { suffix })}
          label="Subdomain"
          onChange={callback(action('onChange'))}
        />
      </InputContainer>
    </>
  );
});
