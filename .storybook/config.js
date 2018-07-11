import { configure } from '@storybook/react';

import HelixUI from 'helix-ui';
import 'helix-ui/dist/styles/helix-ui.min.css';

// Requires require.context from Webpack
// See https://webpack.js.org/guides/dependency-management/#require-context
const req = require.context('../src', true, /stories\.js$/);

function loadStories () {
    HelixUI.initialize();
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
