import { addons } from '@storybook/addons';
import helixTheme from './helixTheme';
import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-options/register';

addons.setConfig({
    theme: helixTheme,
});
