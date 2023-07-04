import {createSlice} from '@reduxjs/toolkit'

// UI slice
//
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        schema: {
            mainColor: '#187B69',
            selectedColor: '#21574D'
        }
    },
    reducers: {}
});

export const uiActions = uiSlice.actions;

export default uiSlice;