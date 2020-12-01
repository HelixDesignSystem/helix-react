import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';
import Pill from './index';
import Status from './Status';
import { callback } from '../storyUtils';

addParameters({
  jsx: { skip: 0 },
});

storiesOf('Pill', module)
  .add('All Knobs', () => {
    let persist = boolean('persist', false);
    let pillText = text('pill text', 'status: unicorns!');
    return (
      <Pill onDismiss={callback(action('onDismiss'))} {...(persist && { persist })}>
        {pillText}
      </Pill>
    );
  })
  .add('Status Pill', () => {
    let filled = boolean('filled', false);
    let pillText = text('pill text', 'default');
    let variant = select('variant', ['default', 'grey', 'purple', 'subdued']);
    return (
      <Status variant={variant || ''} {...(filled && { filled })}>
        {pillText}
      </Status>
    );
  });
