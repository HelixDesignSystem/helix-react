import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('Button', module)
    .add('Basic Button', () => (
        <Button>Hello Button</Button>
    ));
