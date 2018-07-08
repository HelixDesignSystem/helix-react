#!/bin/bash
#
# Post start script.

echo "Post Start: Copying helix.css and helix-ui.browser.js to public/assets/ for dev server"
cp ./node_modules/helix-ui/dist/styles/helix-ui.css ./public/assets/.;
cp ./node_modules/helix-ui/dist/scripts/helix-ui.browser.js ./public/assets/.;
