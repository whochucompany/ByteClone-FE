import { configureStore } from "@reduxjs/toolkit";
import post from '../modules/post'
import comment from '../modules/comment'
import login from '../modules/login'

    const store = configureStore({
        reducer: { post /* comment */, login }
    });

    export default store;