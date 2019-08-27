import { useDispatch } from 'react-redux';
import { apiRequest } from '../../store/actions/api';
import { setAlbums } from '../../store/actions/albums';
import { useAlbums } from '../queries/useAlbumQueries';

export function useAlbumActions() {
  const dispatch = useDispatch();
  const { allAlbums } = useAlbums();

  const fetchAllAlbums = () => {
    if (allAlbums.length > 0) { return; }

    dispatch(
      apiRequest({
        path: '/albums',
        onSuccess,
        onError,
      })
    );
  };

  const fetchAlbumsByUserId = (userId) => {
    dispatch(
      apiRequest({
        path: `/albums?userId=${userId}`,
        onSuccess,
        onError,
      })
    );
  };

  const onSuccess = (albums) => {
    dispatch(setAlbums({ albums }));
  };

  const onError = (errors) => {
    console.log('album errors', errors);
  };

  return { fetchAlbumsByUserId, fetchAllAlbums };
}
