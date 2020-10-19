import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './index';

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
