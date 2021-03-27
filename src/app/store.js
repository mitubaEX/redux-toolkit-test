import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import arrayReducer from '../features/Array/arraySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    array: arrayReducer
  },
});
