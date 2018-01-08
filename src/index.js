/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import Modal from 'react-modal'
import './styles/main.css'

Modal.setAppElement('body');

ReactDOM.render(<Root />, document.getElementById('root'));
