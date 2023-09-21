import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: [],
        loginInfo:[],
        veiwDetails: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    reducers: {
        userListInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        veiwDetailsInfo: (state, action) => {
            state.veiwDetails = action.payload;
        },
        userloginInfo: (state, action) => {
            state.loginInfo = action.payload;
        },
    },
})

export const { userListInfo, veiwDetailsInfo, userloginInfo } = userSlice.actions;

export default userSlice.reducer;