import { SET_USERS } from '../actions/users';

export function usersReducer(users = [], action) {
  switch (action.type) {
    case SET_USERS:
      return action.payload
    default:
      return users;
  }
}
