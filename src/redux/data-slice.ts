import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DATA } from '../types/types';

function numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const main_data = createSlice({
    name: 'data-retentive',
    initialState : [] ,
    reducers: {
        set_main_data: (state:DATA[] , action:PayloadAction<DATA[]>) => {
            action.payload.map((crypto:DATA)=>(
                crypto.favorite = false,
                crypto.toman =numberWithCommas(Math.round(crypto['current_price']*3700000)/100),
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