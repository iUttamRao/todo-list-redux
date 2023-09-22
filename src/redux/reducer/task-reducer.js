import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tasks :[],
}
const taskReducer = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask : (state,action) => {
            state.tasks.push(action.payload);
        },
        removeTask :(state,action) => {
            state.tasks.splice(action.payload, 1);
        },
        updateTask: (state, action) => {
            state.tasks[action.payload.index] = action.payload.value
        }
    }
});

export default taskReducer.reducer;
export const {addTask,removeTask, updateTask} = taskReducer.actions;