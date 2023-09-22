import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer/task-reducer";

const store = configureStore({
    reducer : {
        task :taskReducer
    }
})

export default store