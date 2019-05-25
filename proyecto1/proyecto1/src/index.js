import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './containers/MainContainer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import * as serviceWorker from './serviceWorker';
import bookApp from './redux/reducers';

// import the actions

import {
    addBook,
} from './redux/actions'

// begin store

// Listar elementos DONE
/// Component de filtro text DONE
/// Conectar component de filtro con HideBook DONE
/// Component de filtro click TODO
/// Conectar component de filtro con HideBook TODO
// Crear elementos TODO
/// Agregar otras propiedades de ministate hooks TODO
/// Agregar elemento DONE
// Editar elementos TODO
/// Agregar Book Read click a BookRow DONE
/// Editar elementos con nuevo formulario TODO
// Eliminar elementos DONE
/// Agregar click para eliminar DONE
/// Conectar click a state DONE
// 5 propiedades: Agregar en todo TODO

const store = createStore(bookApp)

console.log("initial state is ", store.getState())

store.dispatch(addBook('The Great Gatsby', '1925', 'F. Scott Fitzgerald', 'The great American novel.'))

console.log("state is now ", store.getState())

const Root = () => (
  <Provider store={store}>
    <MainContainer/>
  </Provider>
)

console.log("state is now ", store.getState())


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
