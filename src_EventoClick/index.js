import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ComponenteApp from './ComponenteApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp parm01='0001' parm02= '0002222'/>,divRoot);