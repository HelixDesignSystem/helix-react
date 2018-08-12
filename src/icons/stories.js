import React from 'react';
import { ICONS } from './';
import { Icon } from './Icon';
import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

storiesOf('Icon', module)
.add('All Knobs', () => {
    const type = select('type', ICONS, 'bell');
    return (<Icon type={type}/>);
});
