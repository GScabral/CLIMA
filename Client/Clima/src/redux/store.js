import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; // Asegúrate de importar tu combinador de reducers aquí

const store = createStore(reducer, applyMiddleware(thunk));

export default store;