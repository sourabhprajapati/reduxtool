import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Userslice";


const store = configureStore ({
    reducer:{
        users:userSlice,
    }
})

export default store;