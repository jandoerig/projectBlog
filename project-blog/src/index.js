import React from 'react';
import ReactDOM from 'react-dom';
import HomebuttonComponent from './components/homebuttonComponent/HomebuttonComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomebuttonComponent />, document.getElementById('root'));

serviceWorker.unregister();
