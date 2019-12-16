import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

// Initialize HelixUI and load CSS
import HelixUI from 'helix-ui';
import 'helix-ui/dist/css/helix-ui.min.css';

addDecorator(withKnobs);
setOptions({
    // name to display in the top left corner
    name: 'helix-react',

    // URL for name in top left corner to link to
    url: 'https://github.com/HelixDesignSystem/helix-react',

    // show story component as full screen
    goFullScreen: false,

    // display floating search box to search through stories
    showSearchBox: false,

    // display panel that shows a list of stories
    showStoriesPanel: true,

    // display panel that shows addon configurations
    showAddonPanel: true,

    // show addon panel as a vertical panel on the right
    addonPanelInRight: false,

    // sorts stories
    sortStoriesByKind: false,

    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    //hierarchySeparator: null,

    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off mulitple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
});

// See https://webpack.js.org/guides/dependency-management/#require-context
const req = require.context('../src', true, /stories\.js$/);

function loadStories () {
    req.keys().forEach((filename) => req(filename));
}

HelixUI.initialize().then(() => {
    configure(loadStories, module);
});
