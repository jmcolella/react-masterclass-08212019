import { useSelector } from 'react-redux';

export function useAllUsers() {
  return useSelector(state => state.users);
}
