import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import Drawer from './index';
import Button from '../Button';
import Div from '../Div';
import { getLongText } from '../storyUtils';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Drawer', module).add('All Knobs', () => {
  let header = text('header', '');
  let body = text('body', '');
  let footer = text('footer', '');
  let open = boolean('open', true);
  let size = select('size', SIZES, 'medium');

  const defaultBody = <p>{getLongText()}</p>;
  const defaultHeader = 'Drawer Header';
  const defaultFooter = (
    <div class="hxButtonSet">
      <Button variant="primary">Confirm</Button>
      <Button variant="tertiary">Cancel</Button>
    </div>
  );

  return (
    <Drawer
      {...(open && { open })}
      {...(size && { size })}
      onOpen={action('onOpen')}
      onClose={action('onClose')}
    >
      {<header>{header || defaultHeader}</header>}
      {<Div className="hxMd">{body || defaultBody}</Div>}
      {<footer>{footer || defaultFooter}</footer>}
    </Drawer>
  );
});
