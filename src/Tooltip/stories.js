import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs/react';
import Tooltip from '../Tooltip';
import { POSITIONS } from '../constants';

const id = 'tooltipDemo';

storiesOf('Tooltip', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    let position = select('positions', POSITIONS, 'top-left');
    let content = text('content', 'I am a tool tip');

    return (
      <>
        <hx-icon id={id} type="help-circle" />
        <Tooltip
          id={id}
          position={position}
          onOpen={action('onOpen')}
          onClose={action('onClose')}
          onReposition={action('onReposition')}
        >
          {content}
        </Tooltip>
      </>
    );
  });
