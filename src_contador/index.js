import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ComponenteApp from './ComponenteApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp  Valor_Contador = {0}/>,divRoot);