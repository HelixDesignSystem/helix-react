import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { InputContainer } from '../storyUtils';
import Switch from './index';

storiesOf('Switch', module).add('All Knobs', () => {
  let disabled = boolean('disabled', false);
  let invalid = boolean('invalid', false);
  let onLabel = text('onLabel', '');
  let offLabel = text('offLabel', '');
  return (
    <InputContainer>
      <Switch
        id="textDemo"
        {...(disabled && { disabled })}
        {...(invalid && { invalid })}
        {...(onLabel && { onLabel })}
        {...(offLabel && { offLabel })}
        onChange={action('onChange')}
      />
    </InputContainer>
  );
});
