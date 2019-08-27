import React, { useState, useEffect } from 'react';
import { useUserActions } from '../../hooks/commands/useUserActions';
import { useAllUsers } from '../../hooks/queries/useUserQueries';
import { useUiQueries } from '../../hooks/queries/useUiQueries';

function Users() {
  const { fetchAllUsers } = useUserActions();
  const users = useAllUsers();
  const { loading } = useUiQueries();

  useEffect(() => {
    fetchAllUsers()
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {
        loading ?
          'Loading...'
          :
          <pre>{ JSON.stringify(users,1,1) }</pre>
      }
    </div>
  );
}

export default Users;
