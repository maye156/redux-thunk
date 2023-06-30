import { createSlice} from "@reduxjs/toolkit";

const estadoIncial = {
    totalCont:0,
    productsList:[],
}

export const cartSlice = createSlice ({
    name:"cart",
    initialState: estadoIncial,
    reducers:{
        incrementar:(state,action)=>{
            state.totalCont=totalCont+1;
            state.productsList=[...state.productsList,action.payload]; 
           },
           decrementar:(state,action)=>{
            state.totalCont=totalCont-1;
            state.productsList=state.productsList.filter(product=>product.id!==action.payload.id); 
           },   
    },
})
export const  {
    incrementar,
    decrementar,
} = cartSlice.actions

export default cartSlice.reducer;
