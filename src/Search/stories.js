import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Search from '../Search';
import SearchAssist from './SearchAssist';
import { InputContainer } from '../storyUtils';
import { POSITIONS } from '../constants';

storiesOf('Search', module)
  .addDecorator(centered)
  .add('All Knobs', () => {
    let disabled = boolean('disabled', false);
    let label = text('label', '');
    let optional = boolean('optional', false);
    let required = boolean('required', false);
    let position = select('positions', POSITIONS, 'bottom-center');

    return (
      <InputContainer>
        <Search
          id="my-search"
          {...(disabled && { disabled })}
          {...(label && { label })}
          {...(optional && { optional })}
          {...(required && { required })}
          {...(position && { position })}
          onChange={action('change')}
        />
      </InputContainer>
    );
  })
  .add('SearchAssist', () => {
    let disabled = boolean('disabled', false);
    let label = text('label', 'Search');
    let optional = boolean('optional', false);
    let required = boolean('required', false);
    let position = select('positions', POSITIONS, 'bottom-center');
    const [value, setValue] = useState('');

    return (
      <InputContainer>
        <SearchAssist
          id="my-assisted-search"
          onChange={(e) => setValue(e.target.value)}
          onClear={(e) => action('onClear')}
          onFocus={(e) => action('onFocus')}
          onBlur={(e) => action('onBlur')}
          {...(disabled && { disabled })}
          {...(label && { label })}
          {...(optional && { optional })}
          {...(required && { required })}
          {...(position && { position })}
        >
          <header>Search for "{value}"</header>
          <section>
            <header>Category Header</header>
            <button className="hxSearchSuggestion">
              Here is a possible <b>{value}</b>
            </button>
            <button className="hxSearchSuggestion">
              Here is a possible <b>{value}</b>
            </button>
            <button className="hxSearchSuggestion">
              Here is a possible <b>{value}</b>
            </button>
          </section>
        </SearchAssist>
      </InputContainer>
    );
  });
