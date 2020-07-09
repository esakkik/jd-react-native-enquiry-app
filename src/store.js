import {createStore, combineReducers, applyMiddleware} from 'redux';
import {tuitionReducer} from './tuition/TuitionReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tuition: tuitionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
