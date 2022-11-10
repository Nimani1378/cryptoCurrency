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
                crypto.favorite = false,
                crypto.toman = crypto['current_price']*37000,
                state.push(crypto)
            ))
            
        },
        toggleFav : (state:DATA[] , action:PayloadAction<string>)=>{
            state.map((crypto:DATA)=>{
                if(crypto.id===action.payload){
                    crypto.favorite = !crypto.favorite;
                }
            })
        }
        
    },
})

export const { set_main_data,toggleFav } = main_data.actions;

export default main_data.reducer;