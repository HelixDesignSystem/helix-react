import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import Radio from './index';
import RadioSet from './RadioSet';

storiesOf('Radio', module).add('All Knobs', () => {
  let label = text('label', 'Radio Label');
  let checked = boolean('checked', false);
  let disabled = boolean('disabled', false);
  let required = boolean('required', false);
  return (
    <Radio
      id="radioDemo"
      {...(checked && { checked })}
      {...(disabled && { disabled })}
      {...(required && { required })}
      {...(label && { label })}
      onChange={action('onChange')}
    />
  );
}).add('Radio Set', () => {
    let checked = boolean('default checked', false);
    let disabled = boolean('disabled', false);
    let required = boolean('required', false);
    return (
        <RadioSet>
            <Radio
                id="radioDemo1"
                name="myRadios"
                value="option1"
                label="option 1"
                {...(checked && { checked })}
                {...(disabled && { disabled })}
                {...(required && { required })}
                onChange={action('onChange')}
            />
            <Radio
                id="radioDemo2"
                name="myRadios"
                value="option2"
                label="option 2"
                {...(disabled && { disabled })}
                {...(required && { required })}
                onChange={action('onChange')}
            />
        </RadioSet>
    );
});
