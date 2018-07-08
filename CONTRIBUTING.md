# Contributing 

### Building

Local development is done in two parts.

First, you'll run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.
```bash
npm start # runs rollup with watch flag 
```
##### (in another tab) 
```
cd example && npm start # runs create-react-app dev server 
```
Anytime you make a change to your component in src/ or to the example app's example/src, create-react-app will live-reload your local dev server so you can iterate on components in real-time.

See: [create-react-library](https://www.npmjs.com/package/create-react-library) for more information on building

