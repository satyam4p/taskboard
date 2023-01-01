import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../network/axios";

const initialState = {
    tasks:[],
    status:'idle', /* idle, succeeded, loading, failed*/
    error:null,
    comments:[],
}

const TASK_URL = '/tasks';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async ()=>{
    const response = await axios.get(TASK_URL);
    console.log("response:: ",response);
    return response.data;
});

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        /**typical format for reducer in a slice is::
         * START: 
         *  reducers:{
            * reducerName(state, action){
            * details of pure reducer function
            * }}
        * END 
         * to add prepare callback function we have done following implemenation as prepare allows 
         * us to add formatting to the action payload automatically  */
        addTask : {
            reducer(state, action){

            },
            prepare(){/** add the attributes that we would send to reducer paylaod for example: for addition prepare(number1, number2) */
                return {
                    /** addd the payload atributes/fields here inside single object ex:
                     * number1,
                     * number2
                     * 
                    */
                }
            }
        },
    },
    extraReducers(builder){/** extra reducer user builder to do some async data fecth/requests and
                                we can add manual cases which needs to be handled for async requests */
        builder.addCase(fetchTasks.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchTasks.fulfilled, (state, action )=>{
            state.tasks.push(action.payload);
            state.status = 'succeeded'
        })
        .addCase(fetchTasks.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }

})

export const selectAllTasks = (state)=>state.task.tasks;
export const selectStatus = (state)=>state.task.status;
export const selectError = (state)=>state.task.error;


export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;