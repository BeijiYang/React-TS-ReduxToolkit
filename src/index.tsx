import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routers';

import Hello from './components/demo/Hello';
import HelloClass from './components/demo/HelloClass';
import HelloHOC from './components/demo/HelloHOC';
import HelloHooks from './components/demo/HelloHooks';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello name="TypeScript" /> */}
    {/* <HelloClass name="TypeScript" /> */}
    {/* <HelloHOC name="TypeScript" loading={false} /> */}
    {/* <HelloHooks name="TypeScript" /> */}
    {/* <App /> */}
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
