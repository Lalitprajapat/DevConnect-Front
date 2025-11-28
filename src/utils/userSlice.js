import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action)=>{    // action.payload -> it will add in state initial value of state is null
            return action.payload;
        },
        removeUser: (state, action)=>{
            return null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;