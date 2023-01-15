import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Plan{
    id: string, salary: number, rent: number, months: number
}

export interface User{
    id: string, name: string, username: string, plan?: Plan 
}

export interface UserInfo{
    active: boolean, user: User| undefined
}

const initialState: UserInfo = { active: false, user: undefined};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signup: (state: UserInfo, action: PayloadAction<{ name: string, username: string, password: string}>) =>{
            let id = "cdfghjkl";
            return { active: true, user: { id, name: action.payload.name, username: action.payload.username}};
        },
        login: (state: UserInfo, action: PayloadAction<{ username: string, password: string}>) =>{
            let id = "cdfghjkl";
            return { active: true, user: { id, name: "Okelekele", username: action.payload.username}};
        },
        logout: (state: UserInfo, action: PayloadAction) =>{
            return { active: false, user: undefined};
        },
        set: (state: UserInfo, action: PayloadAction<{ salary: number, rent: number, months: number }>) =>{
            let id = "cdfghjkl";
            if (state.user) {
                let init = { ...state.user };
                init.plan = { id, salary: action.payload.salary, rent: action.payload.rent, months: action.payload.months };
                return { ...state, user: init };
            }
            return state;
        },
    }
});

export const { login, logout} = userSlice.actions;
export default userSlice.reducer;