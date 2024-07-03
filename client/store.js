import { configureStore } from '@reduxjs/toolkit';
// import marketsReducer from './reducers/marketsReducer';

// modern redux toolkit `configureStore()` -- https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: {
//     markets: marketsReducer,
//     // if we had other reducers, they would go herea
  },
});

export default store;