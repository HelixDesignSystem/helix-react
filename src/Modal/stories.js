import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import Modal from './index';
import Div from '../Div';
import Button from '../Button';
import { getLongText } from '../storyUtils';

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Modal', module).add('All Knobs', () => {
  let header = text('header in H3', 'Modal Header');
  let footer = text('footer', '');
  let open = boolean('open', true);
  let size = select('size', SIZES, 'medium');
  let scroll = boolean('scroll', undefined);

  const smallText =
    'This is the body of a demo modal. Interaction with content behind this modal cannot take place until this modal is closed.\n';
  const longText = [1, 2, 3, 4, 5].map(() => <p>{getLongText()}</p>);
  const defaultFooter = (
    <>
      <Button variant="primary">Confirm</Button>
      <Button variant="tertiary">Cancel</Button>
    </>
  );

  return (
    <Modal
      {...(open && { open })}
      {...(size && { size })}
      open={open}
      onOpen={action('onOpen')}
      onClose={action('onClose')}
    >
      {header && (
        <header>
          <h3>{header}</h3>
        </header>
      )}
      <Div scroll={scroll && 'vertical'}>
        {smallText}
        {scroll ? longText : null}
      </Div>
      {<footer>{footer || defaultFooter}</footer>}
    </Modal>
  );
});
