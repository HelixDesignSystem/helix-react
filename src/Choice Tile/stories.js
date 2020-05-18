import React from 'react';
import { optionsKnob as options } from '@storybook/addon-knobs';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import ChoiceTile from './index';
import { getShortText } from '../storyUtils';

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
        style={{ width: 200 }}
        title={title || defaultTitle}
      >
        {<p>{description || defaultDescription}</p>}
      </ChoiceTile>

      <ChoiceTile
        icon="bell"
        name="choiceTileDemo"
        style={{ marginLeft: 25, width: 200 }}
        title="Other Choice"
      >
        {<p>{defaultDescription}</p>}
      </ChoiceTile>
    </React.Fragment>
  );
});
