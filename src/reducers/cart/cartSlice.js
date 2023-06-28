import { createSlice} from "@reduxjs/toolkit";

const estadoIncial = {
    totalCont:0,
    productsList:[],
}

export const cartSlice = createSlice ({
    name:"cart",
    initialState: estadoIncial,
    reducers:{
        setUser:(state,action)=>{
            state.email=action.payload.email;
            state.fullname=action.payload.fullname;
            state.token=action.payload.token; 
           },
     unSetUser:(state,action)=>{
            state.email="";
            state.fullname="";
            state.token="";
           }
    },
})
export const  {
    incrementar,
    decrementar,
    incrementarPorCantidad,
} = cartSlice.actions

export default cartSlice.reducer;
