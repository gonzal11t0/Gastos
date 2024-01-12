import React from 'react';
import ReactDOM from 'react-dom/client';
import ListaCompras from './ListaCompras';
import './listaCompras.css'; 
import './mediaListaCompras.css'; 
import reportWebVitals from './reportWebVitals';
{/*import './ListaTareas.css';*/}
{/*import ListaTareas from './ListaTareas';*/}
{/*import ContadorRedSocial from './ContadorRedSocial';*/}
{/*import './contador.css';
import Contador from './Contador';*/}
{/*import ParentComponent from './ParentComponent';*/}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<h1>props y estados con React</h1>
    <ParentComponent/>*/}
    {/*<Contador/>*/}
    {/*<ContadorRedSocial/>*/}
    {/*<ListaTareas/>*/}
    <ListaCompras/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
