import centered from '@storybook/addon-centered/react';
import { addParameters, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs/react';
import Tooltip from '../Tooltip';
import { POSITIONS } from '../constants';
import { callback } from '../storyUtils';
import Icon from '../Icon';

addParameters({
  jsx: { skip: 3 },
});

const id = 'tooltipDemo';

storiesOf('Tooltip', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    let position = select('positions', POSITIONS, 'top-left');
    let content = text('content', 'I am a tool tip');

    return (
      <>
        <Icon id={id} type="help-circle" />
        <Tooltip
          id={id}
          position={position}
          onOpen={callback(action('onOpen'))}
          onClose={callback(action('onClose'))}
          onReposition={callback(action('onReposition'))}
        >
          {content}
        </Tooltip>
      </>
    );
  });
