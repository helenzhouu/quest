import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import storyReducer from './storySlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        story: storyReducer,
    },
});
