# helix-react

> A React component library to abstract the ugliness needed to consume Helix UI Web Components in React 15+.

[![NPM](https://img.shields.io/npm/v/helix-react.svg)](https://www.npmjs.com/package/helix-react-module) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Helix-react exists because the React synthetic event system does not play well with native DOM events emitted by WebComponents.
This library was created to get around this issue by offering React component wrappers that will give you accesses to Helix UI native DOM events.
These wrappers only need to be applied to Helix UI web components that emit events.

## Install

```bash
npm install --save helix-react
```
or
```bash
yarn add helix-react
```

## Usage

To gain accesses to `hx-menu` open/close states simply replace [hx-menu](https://rackerlabs.github.io/helix-ui/components/menus/) with `HxMenu`.


```jsx
import React, { Component } from 'react'
import { HxMenu } from 'helix-react'

class Example extends Component {
  render () {
    return (
      <hx-disclosure class="hxBtn" aria-controls="menuId">
        <hx-icon type="cog"></hx-icon> Actions
      </hx-disclosure>
      
      <HxMenu
        id="menuId" 
        onOpen={() => console.log('menu opened')}
        onClose={() => console.log('menu closed')}
      >
        <hx-menuitem>Action 1</hx-menuitem>
        <hx-menuitem>Action 2</hx-menuitem>
      </HxMenu>
    )
  }
}
```

## Contributing & Building

Local development is broken into two parts.

First, you'll run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.
```bash
npm start # runs rollup with watch flag 
```
##### (in another tab) 
```
cd example && npm start # runs create-react-app dev server 
```
Now, anytime you make a change to your component in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on your component in real-time.

See: [create-react-library](https://www.npmjs.com/package/create-react-library) for more information on building

