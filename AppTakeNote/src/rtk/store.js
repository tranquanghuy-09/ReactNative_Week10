import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './slice';

const store = configureStore({
    reducer: {
        notes: noteReducer,
    },
});

export default store;
