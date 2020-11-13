import React from 'react';
import { action } from '@storybook/addon-actions';
import { optionsKnob as options } from '@storybook/addon-knobs';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { addParameters, storiesOf } from '@storybook/react';
import ChoiceTile from './index';
import { callback, getShortText } from '../storyUtils';

addParameters({
  jsx: { skip: 0 },
});

const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Choice Tile', module).add('All Knobs', () => {
  let description = text('description', '');
  let title = text('title', '');
  let checked = boolean('checked', false);
  let disabled = boolean('disabled', false);
  let invalid = boolean('invalid', false);
  let subdued = boolean('subdued', false);
  let size = select('size', SIZES, 'medium');
  let icon = options(
    'icon',
    {
      account: 'account',
      bell: 'bell',
      key: 'key',
    },
    'key',
    { display: 'inline-radio' }
  );

  const defaultDescription = getShortText();
  const defaultTitle = 'Title Here';

  return (
    <React.Fragment>
      <ChoiceTile
        {...(checked && { checked })}
        {...(disabled && { disabled })}
        {...(invalid && { invalid })}
        {...(subdued && { subdued })}
        {...(size && { size })}
        icon={icon}
        name="choiceTileDemo"
        onChange={callback(action('onChange'))}
        style={{ width: 200, float: 'left' }}
        title={title || defaultTitle}
      >
        {<p>{description || defaultDescription}</p>}
      </ChoiceTile>

      <ChoiceTile
        icon="bell"
        name="choiceTileDemo"
        style={{ marginLeft: 25, width: 200, float: 'left' }}
        title="Other Choice"
      >
        {<p>{defaultDescription}</p>}
      </ChoiceTile>
    </React.Fragment>
  );
});
