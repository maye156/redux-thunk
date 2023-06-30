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
            state.totalCont +=1;
            state.productsList=[...state.productsList,action.payload]; 
           },
           decrementar:(state,action)=>{
            const productId= action.payload;
            state.totalCont=state.totalCont-1;
            state.productsList=state.productsList.filter(product=>product.id!==productId); 
           },   
    },
})
export const  {
    incrementar,
    decrementar,
} = cartSlice.actions

export default cartSlice.reducer;
