import {URL} from '../constants';

export const ACTION_TYPE = {
  TUITION_LIST_FETCH: 'TUITION_LIST_FETCH',
  TUITION_LIST_ERRORED: 'TUITION_LIST_ERRORED',
  TUITION_LIST_LOADED: 'TUITION_LIST_LOADED',
  TUITION_SELECT: 'TUITION_LIST_LOADED',
};

function tuitionListLoading() {
  return {
    type: ACTION_TYPE.TUITION_LIST_FETCH,
  };
}

function tuitionListLoaded(tuitionList) {
  return {
    type: ACTION_TYPE.TUITION_LIST_LOADED,
    payload: tuitionList,
  };
}
function tuitionListErrored(error) {
  return {
    type: ACTION_TYPE.TUITION_LIST_ERRORED,
    payload: error,
  };
}
export function tuitionSelect(enqId) {
  return {
    type: ACTION_TYPE.TUITION_SELECT,
    payload: enqId,
  };
}

export function fetchTuitionList() {
  return (dispatch) => {
    dispatch(tuitionListLoading());
    fetch(URL.TUITION_LIST)
      .then((data) => data.json())
      .then((item) => dispatch(tuitionListLoaded(item.dataList)))
      .catch((error) => dispatch(tuitionListErrored(error.toString())));
  };
}
