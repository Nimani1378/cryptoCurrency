import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DATA } from '../types/types';

// interface DATA{
//     id : string,
//     symbol : string,
//     name : string,
//     image : string,
//     current_price : string,

// }

export const main_data = createSlice({
    name: 'data',
    initialState : [] ,
    reducers: {
        set_main_data: (state:DATA[] , action:PayloadAction<DATA[]>) => {
            action.payload.map((crypto:DATA)=>(
                state.push(crypto)
            ))
            
        },
        
    },
})

export const { set_main_data } = main_data.actions;

export default main_data.reducer;