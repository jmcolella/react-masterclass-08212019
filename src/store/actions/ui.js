export const TOGGLE_LOADER = 'TOGGLE_LOADER';

export function toggleLoader({ loading = false }) {
  return {
    type: TOGGLE_LOADER,
    payload: loading,
  }
}
