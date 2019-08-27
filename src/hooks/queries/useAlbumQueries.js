import { useSelector } from 'react-redux';

export function useAlbums(userId) {
  const albums = useSelector(state => state.albums);

  return {
    albumsByUserId: albums.find(album => album.userId === userId),
    allAlbums: albums
  };
}
