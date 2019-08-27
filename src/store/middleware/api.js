import { API_REQUEST, apiRequest } from '../actions/api';
import { toggleLoader } from '../actions/ui';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === API_REQUEST) {
    const {
      method,
      path,
      onSuccess,
      onError,
    } = action.meta;

    dispatch(toggleLoader({ loading: true }));

    fetch(BASE_URL + path, { method })
      .then((response) => response.json())
      .then((result) => {
        onSuccess(result);

        dispatch(toggleLoader({ loading: false }));
      })
      .catch(onError);

    return;
  }

  next(action);
}
