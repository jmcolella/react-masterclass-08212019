export const API_REQUEST = 'API_REQUEST';

export function apiRequest({
  method = 'GET',
  path,
  data = {},
  onSuccess,
  onError
}) {
  return {
    type: API_REQUEST,
    payload: data,
    meta: {
      path,
      method,
      onSuccess,
      onError
    },
  };
}
