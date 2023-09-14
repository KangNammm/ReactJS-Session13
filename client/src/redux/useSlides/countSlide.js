import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
    name: "count",
    initialState: {value: 0},
    reducers: {
        increase: (state, action) => {
            console.log(action);
            state.value += 1;
        },
        decrease: (state, action) => {
            state.value -= 1;
        },
    },
})



export const { increase } = countSlice.actions; // export action ra bên ngoài
export const { decrease } = countSlice.actions; // export action ra bên ngoài

export default countSlice.reducer;


// type name/ tên reducer