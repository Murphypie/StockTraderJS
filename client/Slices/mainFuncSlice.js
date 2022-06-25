import { createSlice } from '@reduxjs/toolkit';

export const mainFuncSlice = createSlice({
    name: 'mainFunc',
    initialState:{
        navBarcollapse: true,
        dropMenuCollapse: false,
    },
    reducers:{
        navBarcollapseReducer:(state, action) => {
            state.navBarcollapse = !state.navBarcollapse
        },
        dropMenuCollapseReducer:(state, action)=>{
            state.dropMenuCollapse = !state.dropMenuCollapse
        }
    }

})

export const {navBarcollapseReducer, dropMenuCollapseReducer} = mainFuncSlice.actions
export default mainFuncSlice.reducer
