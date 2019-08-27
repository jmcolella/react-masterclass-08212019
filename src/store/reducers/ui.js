import { TOGGLE_LOADER } from '../actions/ui';

const initialUi = {
  loading: true
};

export function uiReducer(ui = initialUi, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...ui,
        loading: action.payload,
      };
    default:
      return ui;
  }
}
