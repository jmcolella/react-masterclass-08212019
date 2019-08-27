export const SET_ALBUMS = 'SET_ALBUMS';
export const UPDATE_ALBUMS = 'UPDATE_ALBUMS';

export function setAlbums({ albums }) {
  return {
    type: SET_ALBUMS,
    payload: albums
  };
}

export function updateAlbums({ albums }) {
  return {
    type: UPDATE_ALBUMS,
    payload: albums
  };
}
