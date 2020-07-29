import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

storiesOf('Checkbox', module).add('All Knobs', () => {
  let label = text('label', 'check me out');
  let checked = boolean('checked', false);
  let disabled = boolean('disabled', false);
  let indeterminate = boolean('indeterminate', false);
  let required = boolean('required', false);
  return (
    <Checkbox
      id="chkDemo"
      {...(checked && { checked })}
      {...(disabled && { disabled })}
      {...(indeterminate && { indeterminate })}
      {...(required && { required })}
      {...(label && { label })}
      onChange={action('onChange')}
    />
  );
});
