import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import HelixUI from 'helix-ui';
import 'helix-ui/dist/css/helix-ui.min.css';
import { jsxDecorator } from 'storybook-addon-jsx';

addDecorator(jsxDecorator);
addDecorator(withKnobs);

// Requires require.context from Webpack
// See https://webpack.js.org/guides/dependency-management/#require-context
const req = require.context('../src', true, /stories\.js$/);

function loadStories () {
    req.keys().forEach((filename) => req(filename));
}

HelixUI.initialize().then(() => {
    configure(loadStories, module);
});
