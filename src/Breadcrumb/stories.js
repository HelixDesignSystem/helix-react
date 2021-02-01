import React from 'react';
import { addParameters, storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import Breadcrumb from './index';

addParameters({
  jsx: { skip: 0 },
});

storiesOf('Breadcrumb', module)
  .add('Multiple Breadcrumbs', () => {
    let item1 = text('item1', 'Home');
    let item2 = text('item2', 'Library');
    let item3 = text('item3', 'Current');
    return (
      <Breadcrumb>
        <a href="#">{item1}</a>
        <a href="#">{item2}</a>
        <a href="#">{item3}</a>
      </Breadcrumb>
    );
  })
  .add('Single Breadcrumb', () => {
    let item1 = text('item1', 'Home');
    return (
      <Breadcrumb>
        <a href="#">{item1}</a>
      </Breadcrumb>
    );
  });
