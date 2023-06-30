import { createSlice} from "@reduxjs/toolkit";

const estadoIncial = {
    email:"",
  fullname:"",
  token:"", 
} 

export const  userSlice = createSlice ({
    name:"user",
    initialState:estadoIncial,
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



export const {setUser, unSetUser} = userSlice.actions



export default userSlice.reducer;