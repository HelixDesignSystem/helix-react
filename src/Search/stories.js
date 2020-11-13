import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { addParameters, storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Search from '../Search';
import SearchAssist from './SearchAssist';
import { callback, InputContainer } from '../storyUtils';
import { POSITIONS } from '../constants';

addParameters({
  jsx: { skip: 1 },
});

storiesOf('Search', module)
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
          onChange={callback(action('change'))}
          autoComplete="off"
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
          value={value}
          onClear={(e) => {
            callback(action('onClear'));
            setValue('');
          }}
          onFocus={(e) => callback(action('onFocus'))}
          onBlur={(e) => callback(action('onBlur'))}
          autoComplete="off"
          {...(disabled && { disabled })}
          {...(label && { label })}
          {...(optional && { optional })}
          {...(required && { required })}
          {...(position && { position })}
        >
          <header>Search for "{value}"</header>
          <section>
            <header>Category Header</header>
            {POSITIONS.filter((p) => p.search(value) !== -1).map((item) => (
              <button className="hxSearchSuggestion" key={item} onClick={() => setValue(item)}>
                Here is a possible match: {item}
              </button>
            ))}
          </section>
        </SearchAssist>
      </InputContainer>
    );
  });
