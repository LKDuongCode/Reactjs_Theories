// tạp sau khi tạo reducer
import {combineReducers, createStore} from 'redux';

//lấy reducerCount
import reducerCount from './reducers/countReducer';
import reducerJob from './reducers/jobReducer';

//quản lí nhiều reducer.
let rootReducer = combineReducers({
    reducerCount: reducerCount,
    reducerJob: reducerJob,
})

let store = createStore(rootReducer);

export default store; 
// sau đó vào main create Provider.