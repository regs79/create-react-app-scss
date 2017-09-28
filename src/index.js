import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './utils/registerServiceWorker';

import './styles/base.css'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
