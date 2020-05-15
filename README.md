[![forthebadge](https://img.shields.io/badge/Made%20With-React-blue?style=for-the-badge&logo=react&labelColor=202020&color=62DAFB)](https://reactjs.org/)

<div align="center">
  <h1>Helix React</h1>

  <p align="center">
    <img src="https://user-images.githubusercontent.com/22566333/82078061-7e8f0700-96ae-11ea-98f5-94be80c8d060.png">
  </p>

  A React wrapper of the [Helix UI Webcomponents Library](https://github.com/HelixDesignSystem/helix-ui/)
  
  🚀 Alpha release coming this summer 🌻
</div>

<hr />

## Table of Contents

- [The problem](#the-problem)
- [This solution](#this-solution)
- [Installation](#installation)
- [Examples](#examples)
  - [Helix UI Webcomponent Snippet From Documentation](#helix-ui-webcomponent-snippet-from-documentation)
  - [Our Implementation](#our-implementation)
- [Guiding Principles](#guiding-principles)
- [Storybook](#-storybook)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
  - [❓ Questions](#-questions)
- [Contributors](#contributors)

## The problem

You want to utilize the Helix UI webcomponents for your React application.
As a part of this goal, you have to write and maintain React components
that wrap the webcomponents with required boilerplate. You might want to
use a tool like [Storybook](https://storybook.js.org/) to see what these
wrappers look like.

## This solution

`Helix React` exposes React wrappers of the Helix UI webcomponents for you.
No need to write and maintain this yourself, this has you covered. As a bonus,
you can also see the components in Storybook in order to play around yourself.

## Installation

More details to come.

### Prerequisites

#### Helix UI
Follow the [Getting Started with HelixUI](https://helixdesignsystem.github.io/helix-ui/guides/getting-started/) guide

## Examples

### Helix UI Webcomponent Snippet From Documentation

```jsx
<hx-disclosure
  aria-controls="demo-modal"
  class="hxBtn"
>
  Open Modal
</hx-disclosure>
<hx-modal
  id="demo-modal"
>
  <header>
    ...
  </header>

  <hx-div>
    ...
  </hx-div>

  <footer>
    <button class="hxBtn hxPrimary">Confirm</button>
    <button class="hxBtn">Cancel</button>
  </footer>
</hx-modal>
```

### Our Implementation

```jsx
<Disclosure
  ariaControls="demo-modal"
  className="hxBtn"
>
  Open Modal
</Disclosure>

<Modal id="demo-modal">
  <header>
    ...
  </header>
  <Div>
    ...
  </Div>
  <footer>
    <Button variant="primary">Confirm</Button>
    <Button>Cancel</Button>
  </footer>
```

## Guiding Principles

We try to only expose basic wrappers of Helix UI webcomponents.
Each wrapper corresponds with a component listed on the [Helix UI documentation](https://helixdesignsystem.github.io/helix-ui/):

![helix-ui-documentation](https://user-images.githubusercontent.com/22566333/82083617-07f70700-96b8-11ea-9581-da1796737e52.png)

These components are just the "building blocks" of other Helix patterns listed in
the [Helix design documentation](http://helix.rax.io/status.html).

Our aim is expose these building blocks and not put them together for more
complex Helix patterns (i.e. a submit button with a loader).

## 📚 Storybook
[Storybook](https://storybook.js.org/) is an open source tool for developing UI components
in isolation for React, Vue, and Angular.
You can use this as a playground for all our components.

1. Install Yarn

```bash
npm i -g yarn
```

2. Install Dependencies

```bash
yarn install
```

3. Run Storybook

```bash
npm start
```
The script should automatically open Storybook in your browser, but you can always navigate to http:http://localhost:6006/?path=/story

4. Play Around
<img width="639" alt="Screen Shot 2020-05-15 at 2 32 35 PM" src="https://user-images.githubusercontent.com/22566333/82084224-f5c99880-96b8-11ea-92e2-403b3f4378db.png">

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/HelixDesignSystem/helix-react/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**](https://github.com/HelixDesignSystem/helix-react/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)

### ❓ Questions

For questions related to using the library, please visit a support community
instead of filing an issue on GitHub.

[Slack](https://join.slack.com/share/zt-edajgkat-LG_5SXYoCeIzknrQPVWaTA)

## Contributors

Thanks goes to these people:

<table>
  <tr>
    <td align="center"><a href="https://github.com/michaelmang"><img src="https://avatars0.githubusercontent.com/u/10120600?s=400&u=7a37b1eba79b6ee2c7753a457b8a33998595fe20&v=4" width="100px;" alt=""/><br /><sub><b>James Thompson</b></sub></a><br /><a href="https://github.com/HelixDesignSystem/helix-react/commits?author=100Stacks" title="Commits">💻</a></td>
    <td align="center"><a href="https://github.com/michaelmang"><img src="https://avatars0.githubusercontent.com/u/35456401?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Nicko Winner-Arroyo</b></sub></a><br /><a href="https://github.com/HelixDesignSystem/helix-react/commits?author=nicko-winner" title="Commits">💻</a></td>
    <td align="center"><a href="https://github.com/michaelmang"><img src="https://avatars1.githubusercontent.com/u/22566333?s=400&u=4bf26df70a7aaf408bd5e8d187c7066f2950adca&v=4" width="100px;" alt=""/><br /><sub><b>Mike Mangialardi</b></sub></a><br /><a href="https://github.com/HelixDesignSystem/helix-react/commits/master?author=mike.mangialardi@rackspace.com" title="Commits">💻</a></td>
  </tr>
</table>
