import React from 'react';
import { addParameters, storiesOf } from '@storybook/react';
import Breadcrumb from './index';

addParameters({
  jsx: { skip: 0 },
});

storiesOf('Breadcrumb', module)
  .add('Multiple Breadcrumbs', () => {
    return (
      <Breadcrumb>
        <a href="#">Home</a>
        <a href="#">Library</a>
        <a href="#">Current</a>
      </Breadcrumb>
    );
  })
  .add('Single Breadcrumb', () => {
    return (
      <Breadcrumb>
        <a href="#">Home</a>
      </Breadcrumb>
    );
  });
