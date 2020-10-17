import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './index';

storiesOf('Crumb', module)
  .add('Multiple Crumbs', () => {
    return (
      <Breadcrumb>
        <a href="#">Home</a>
        <a href="#">Library</a>
        <a href="#">Current</a>
      </Breadcrumb>
    );
  })
  .add('Single Crumb', () => {
    return (
      <Breadcrumb>
        <a href="#">Home</a>
      </Breadcrumb>
    );
  });
