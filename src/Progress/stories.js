import React from 'react';
import { boolean, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import Busy from '../Busy';
import Progress from './index';

storiesOf('Loader', module)
  .add('Busy', () => {
    let paused = boolean('paused', false);
    return (
      <Busy {...(paused && { paused })} />
    );
  })
  .add('Progress', () => {
    const options = {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    };
    let value = number('value', 40, options)
    return (
      <Progress value={value.toString()} />
    );
  });
