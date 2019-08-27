import React, { useEffect } from 'react';
import { useAlbumActions } from '../../hooks/commands/useAlbumActions';
import { useAlbums } from '../../hooks/queries/useAlbumQueries';
import { useUiQueries } from '../../hooks/queries/useUiQueries';

const Albums = ({ userId }) => {
  const { fetchAllAlbums } = useAlbumActions();
  const { allAlbums } = useAlbums(userId);
  const { loading } = useUiQueries();

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  return (
    <div>
      <h2>Albums</h2>

      {
        loading ?
          'Loading...'
          :
          <pre>{ JSON.stringify(allAlbums,1,1) }</pre>
      }
    </div>
  );
}

export default Albums;
