import { configureStore } from '@reduxjs/toolkit';
import mainFuncSlice  from "./Slices/mainFuncSlice";

export default configureStore({
    reducer:{
       mainFunc: mainFuncSlice
    },
})