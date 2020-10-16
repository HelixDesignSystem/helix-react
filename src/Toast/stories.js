import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs/react';
import Toast from './index';
import { action } from '@storybook/addon-actions';

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
      onDismiss={action('onDismiss')}
      onSubmit={action('onSubmit')}
    >
      {content}
    </Toast>
  );
});
