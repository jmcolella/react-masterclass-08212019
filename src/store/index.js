import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { apiMiddleware } from './middleware/api';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer( // middlewares
    applyMiddleware(
      apiMiddleware
    )
  ),
);
