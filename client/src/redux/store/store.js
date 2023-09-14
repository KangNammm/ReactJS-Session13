import { configureStore } from "@reduxjs/toolkit";
import  countSlice from  "../useSlides/countSlide";
import  randomSlice  from "../useSlides/randomSlide";
import productSlice from "../useSlides/productSlice";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        count: countSlice,
        random: randomSlice,
        product: productSlice,
    },
    middleware: [thunk],

})
