import React from 'react';
import Icon, { Icons } from './';
import { select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

storiesOf('Icon', module)
.add('All Knobs', () => {
    const type = select('type', Icons, 'bell');
    return (<Icon type={type}/>);
});
