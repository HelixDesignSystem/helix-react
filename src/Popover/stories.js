import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import Popover from '.';
import Div from '../Div';
import Button from '../Button';
import { getLongText } from '../storyUtils';
import { POSITIONS } from '../constants';
import Disclosure from '../Disclosure';

storiesOf('Popover', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
  let header = text('header', 'Popover Header');
  let footer = text('footer', '');
  let position = select('positions', POSITIONS);
  let scroll = boolean('scroll', false);

  const smallText = 'This is the body of a demo popover\n';
  const longText = [1, 2, 3, 4, 5].map(() => <p>{getLongText()}</p>);
  const defaultFooter = (
    <>
      <Button variant="primary">Ok</Button>
      <Button variant="tertiary">Cancel</Button>
    </>
  );

  return (
    <>
      <Disclosure ariaControls="demoPopover">
        <Button>Open Popover</Button>
      </Disclosure>
      <Popover
        id="demoPopover"
        {...(position && { position })}
        onOpen={action('onOpen')}
        onClose={action('onClose')}
        onPosition={action('onReposition')}
      >
        {header && (
          <header>
            {header}
          </header>
        )}
        <Div scroll={scroll && 'vertical'}>
          {smallText}
          {scroll ? longText : null}
        </Div>
        {<footer>{footer || defaultFooter}</footer>}
      </Popover>
    </>
  );
});
