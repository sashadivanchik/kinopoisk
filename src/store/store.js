import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); 

const store = createStore(rootReducer, reduxTools);

export default store;