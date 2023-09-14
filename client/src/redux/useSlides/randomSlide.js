import { createSlice } from "@reduxjs/toolkit";

export const randomSlice = createSlice({
    name: "random",
    initialState:  [], // Immer làm nên cơ chế này
    reducers: {
        random: (state, action) => {
            console.log(action);
            state.push(action.payload);
        },
    },
})

export const { random } = randomSlice.actions; // export action ra bên ngoài

export default randomSlice.reducer;