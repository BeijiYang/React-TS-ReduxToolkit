import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './routers';
import { store as storeTkt } from './redux/store.tkt';

ReactDOM.render(
  <Provider store={storeTkt}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
