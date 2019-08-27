import { useSelector } from 'react-redux';

export function useUiQueries() {
  const ui = useSelector(state => state.ui);

  return {
    loading: ui.loading,
  };
}
