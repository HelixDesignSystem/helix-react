# helix-react

> A React component library to abstract the ugliness needed to consume Helix UI Web Components in React 15+.

[![NPM](https://img.shields.io/npm/v/helix-react.svg)](https://www.npmjs.com/package/helix-react-module) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This library gives react accesses to Helix UI Web Components events without needing to add custom event listeners. 
The React wrapper components only need to be applied to Helix UI Web Components that you would like to get events from.

## Install

```bash
npm install --save helix-react
```
or
```bash
yarn add helix-react
```

## Usage

when using this unwrapped `<hx-checkbox />` component `handleChange` will not be called.
```jsx
  <hx-checkbox onChange={handleChange}>
```
To gain accesses to the `hx-checkbox` emitted change event simply use `HxMenu` instead:
```jsx
  import { HxCheckbox } from 'react-helix'
  //...
  <HxCheckbox onChange={handleChange}>
```

## Dependencies
Helix UI CSS and JavaScript must be loaded on the pages you intent to use helix-react on.
