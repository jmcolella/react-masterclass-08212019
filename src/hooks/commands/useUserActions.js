import { useDispatch } from 'react-redux';
import { apiRequest } from '../../store/actions/api';
import { setUsers } from '../../store/actions/users';
import { useAllUsers } from '../../hooks/queries/useUserQueries';

export function useUserActions() {
  const dispatch = useDispatch();
  const users = useAllUsers();

  const fetchAllUsers = () => {
    if (users.length > 0) { return; }

    dispatch(
      apiRequest({
        path: '/users',
        onSuccess,
      })
    );
  };

  const onSuccess = (users) => {
    dispatch(setUsers({ users }));
  };

  return { fetchAllUsers };
}
