import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { InputContainer } from '../storyUtils';
import Switch from './index';

storiesOf('Switch', module).add('All Knobs', () => {
  let disabled = boolean('disabled', false);
  let invalid = boolean('invalid', false);

  return (
      <InputContainer>
        <Switch
          id="textDemo"
          {...(disabled && { disabled })}
          {...(invalid && { invalid })}
          onChange={action('onChange')}
        />
      </InputContainer>
  );
});
