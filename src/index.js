import React from 'react'; // biblioteca en sí
import ReactDOM from 'react-dom'; // React enfocado al navegador
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // import bootstrap first and then the css because you can overide bootstrap default classes with css customized classes if required.
// React trabaja con webpack. ESto le permite a JavaScript importar css y luego transformarlos en archivos propios de css o incluso dentro del mismo html
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
