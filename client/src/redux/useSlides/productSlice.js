import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { createProduct, deleteById, getAllProduct, updateProduct } from "../../services/productService";


const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) => {
            state.status = 'Loading' // waiting time
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.status = "Success"; // thành công
                state.data = action.payload; // dữ liệu trả về
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.status = "Failed"; // thất bại
                state.error = action.error.message; // nội dung lỗi
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                state.data = state.data.filter((product) => product.id !== action.payload);
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                [...state.data, action.payload];
        })
    },
})

export default productSlice.reducer;