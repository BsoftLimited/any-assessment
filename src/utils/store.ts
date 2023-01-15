import { configureStore } from "@reduxjs/toolkit";
import userReduser from '../items/user';


const store = configureStore({
    reducer: {
        user: userReduser
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const getUserSelector = (state: RootState) => state.user;
export default store;