import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoggedIn: false,
    user: null,
}

const loginSlice = createSlice({
    name : "login",
    initialState,
    reducers : {
    loginSuccess : (state,action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        state.user = action.payload.user;
    }}
})

export const {loginSuccess} = loginSlice.actions;
export default loginSlice.reducer;
