import { createStore, applyMiddleware } from 'redux'
import { todoReducer } from './reducers/todoReducer';
import thunk from 'redux-thunk';


export const store = createStore(todoReducer, applyMiddleware(thunk));
