import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';
import { callback, InputContainer } from '../storyUtils';
import Switch from './index';

addParameters({
  jsx: { skip: 1 },
});

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
        onChange={callback(action('onChange'))}
      />
    </InputContainer>
  );
});
