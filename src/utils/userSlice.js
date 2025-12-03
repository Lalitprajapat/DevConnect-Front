import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser: (state, action)=>{    // action.payload -> it will add in state initial value of state is null
            return action.payload;
        },
        removeUser: () => null
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;