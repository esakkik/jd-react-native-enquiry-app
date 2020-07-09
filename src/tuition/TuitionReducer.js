import {ACTION_TYPE} from './TuitionAction';
import {DATA_STATUS} from '../constants';

const INITIAL_STATE = {
  list: {
    status: DATA_STATUS.NOT_STARTED,
    data: [],
    error: undefined,
  },
  selected_tuitions: undefined,
};

export const tuitionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.TUITION_LIST_FETCH:
      return Object.assign({}, state, {list: {status: DATA_STATUS.LOADING, data: []}});
    case ACTION_TYPE.TUITION_LIST_LOADED:
      return Object.assign({}, state, {list: {status: DATA_STATUS.LOADED, data: action.payload}});
    case ACTION_TYPE.TUITION_LIST_ERRORED:
      return Object.assign({}, state, {list: {status: DATA_STATUS.ERRORED, data: action.payload}});
    case ACTION_TYPE.TUITION_SELECT:
      return Object.assign({}, state, {selected_tuitions: action.payload});
    default:
      return state;
  }
};
