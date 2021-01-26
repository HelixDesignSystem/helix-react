import React from 'react';
import { addParameters, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import Popover from '.';
import Div from '../Div';
import Button from '../Button';
import { callback, getLongText } from '../storyUtils';
import { POSITIONS } from '../constants';
import Disclosure from '../Disclosure';

addParameters({
  jsx: { skip: 3 },
});

storiesOf('Popover', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    let header = text('header', 'Popover Header');
    let footer = text('footer', '');
    let position = select('positions', POSITIONS, 'bottom-right');
    let scroll = boolean('scroll', undefined);

    const smallText = 'This is the body of a demo popover\n';
    const longText = [1, 2, 3, 4, 5].map(() => <p>{getLongText()}</p>);
    const defaultFooter = [
      <Button variant="primary">Ok</Button>,
      <Button variant="secondary">Cancel</Button>,
    ];
    return (
      <>
        <Disclosure ariaControls="demoPopover">
          <Button>Open Popover</Button>
        </Disclosure>
        <Popover
          id="demoPopover"
          {...(position && { position })}
          onOpen={callback(action('onOpen'))}
          onClose={callback(action('onClose'))}
          onPosition={callback(action('onReposition'))}
        >
          {header && <header>{header}</header>}
          <Div {...(scroll && { scroll: 'vertical' })}>
            {!scroll && smallText}
            {scroll && longText}
          </Div>
          {<footer>{footer || defaultFooter}</footer>}
        </Popover>
      </>
    );
  });
