import Button from './';
import { Icons } from '../Icon';
import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

const SIZES = {
    'small': 'Small',
    '': 'Medium',
    'large': 'Large',
};
const VARIANTS = {
    'primary': 'Primary',
    '': 'Secondary',
    'tertiary': 'Tertiary',
};

storiesOf('Button', module)
.addDecorator(centered)
.add('Sizes', () => {
    const size = select('size', SIZES, '');
    return (
        <Button 
            { ...( size && { size }) }
        >{SIZES[size]} Button</Button>
    );
})
.add('Variants', () => {
    const variant = select('variant', VARIANTS, '');
    return (
        <Button 
            { ...(variant && { variant }) }
        >{VARIANTS[variant]} Button</Button>
    );
})
.add('Icon Only', () => {
    const headIcon = select('headIcon', Icons, 'download').trim();
    return (<Button { ...( headIcon && { headIcon }) }/>);
})
.add('Icons and Text', () => {
    const innerText = text('(innerText)', 'Action');
    const headIcon = select('headIcon', ['', ...Icons], 'cog').trim();
    const tailIcon = select('tailIcon', ['', ...Icons], 'angle-down').trim();

    return (
        <Button 
            { ...( headIcon && { headIcon }) }
            { ...( tailIcon && { tailIcon }) }
        >{innerText}</Button>
    );
})
.add('Busy', () => {
    const innerText = text('(innerText)', 'Loading');
    const busy = boolean('busy', true);
    return (<Button { ...( busy && { busy }) }>{innerText}</Button>);
})
.add('Disabled', () => {
    const innerText = text('(innerText)', 'Loading');
    const disabled = boolean('disabled', true);
    return (<Button { ...( disabled && { disabled }) }>{innerText}</Button>)
})
.add('All Knobs', () => {
    /* ========== KNOBS ========== */
    let innerText = text('(innerText)', '');
    let busy = boolean('busy', false);
    let cssClasses = text('class', '');
    let disabled = boolean('disabled', false);
    let headIcon = select('headIcon', ['', ...Icons], '').trim();
    let size = select('size', SIZES, '');
    let tailIcon = select('tailIcon', ['', ...Icons], '').trim();
    let variant = select('variant', VARIANTS, '');

    if (innerText.trim() === '') {
        innerText = [
            (busy ? 'Busy' : ''),
            (disabled ? 'Disabled' : ''),
            SIZES[size],
            VARIANTS[variant],
            'Button'
        ].join(' ').trim();
    }

    /* ========== OUTPUT ========== */
    return (
        <Button 
            { ...( cssClasses && { className: cssClasses }) }
            { ...( busy && { busy }) }
            { ...( disabled && { disabled }) }
            { ...( headIcon && headIcon !== '' && { headIcon }) }
            { ...( size && { size }) }
            { ...( tailIcon && tailIcon !== '' && { tailIcon }) }
            { ...( variant && { variant }) }
        >{innerText}</Button>
    );
})
;