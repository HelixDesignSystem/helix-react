import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Pill from './index';
import Status from './Status';

storiesOf('Pill', module)
  .add('All Knobs', () => {
    let persist = boolean('persist', false);
    let pillText = text('pill text', 'status: unicorns!');
    return (
      <Pill onDismiss={action('onDismiss')} {...(persist && { persist })}>
        {pillText}
      </Pill>
    );
  })
  .add('Status Pill', () => {
    let filled = boolean('filled', false);
    let pillText = text('pill text', 'default');
    let variant = select('variant', ['grey', 'purple', 'subdued']);
    return (
      <Status variant={variant} {...(filled && { filled })}>
        {pillText}
      </Status>
    );
  });
