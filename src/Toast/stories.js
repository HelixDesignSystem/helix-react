import React from 'react';
import { addParameters, storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs/react';
import Toast from './index';
import { action } from '@storybook/addon-actions';
import { callback } from '../storyUtils';

addParameters({
  jsx: { skip: 0 },
});

const TYPES = {
  info: 'info',
  error: 'error',
  success: 'success',
};

storiesOf('Toast', module).add('All Knobs', () => {
  let content = text('content', 'The password has been reset for foo@bar.com.');
  let cta = text('cta', 'Try Again');
  let type = select('type', TYPES, '');

  return (
    <Toast
      {...(cta && { cta })}
      {...(status && { status })}
      {...(type && { type })}
      onDismiss={callback(action('onDismiss'))}
      onSubmit={callback(action('onSubmit'))}
    >
      {content}
    </Toast>
  );
});
