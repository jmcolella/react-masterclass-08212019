import { SET_ALBUMS } from '../actions/albums';

export function albumsReducer(albums = [], action) {
  switch (action.type) {
    case SET_ALBUMS:
      return action.payload
    default:
      return albums;
  }
}
