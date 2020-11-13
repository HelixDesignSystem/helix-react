import React from 'react';
import Icon, { Icons } from './';
import centered from '@storybook/addon-centered/react';
import { select } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';

addParameters({
  jsx: { skip: 2 },
});

storiesOf('Icon', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    const type = select('type', Icons, 'bell');
    return <Icon type={type} />;
  });
