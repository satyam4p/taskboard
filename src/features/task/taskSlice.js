import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { axiosPrivate } from "../../network/axios";
import urlSchema from '../../network/urlSchema/urlSchema.json';

const initialState = {
    tasks:[],
    status:'idle', /* idle, succeeded, loading, failed*/
    error:null,
    comments:[],
    currentTask:null,
    currentTaskStatus:'idle',
    taskConfig:[]
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async ()=>{
    const URL = urlSchema.Tasks.FETCH_ALL;
    const response = await axios.get(URL);
    console.log("response:: ",response);
    return response.data;
});

// export const createTask = createAsyncThunk("tasks/createTask", async (data)=>{
//     const URL = urlSchema.Tasks.CREATE_TASK;
//     const response = await axiosPrivate.put(URL, data, {withCredentials:true});
//     console.log("creat task response:: ",response);
// })

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        fetchTaskConfigBegin : (state, action) => {
            return {
                ...state,
                status: 'loading'
            }
        },
        fetchTaskConfigSuccess:(state, action)=>{
            return {
                ...state,
                status: 'succeeded',
                taskConfig: action.payload
            }
        },
        fetchTaskConfigError:(state, action)=>{
            return {
                ...state,
                status: 'failed',
                error: action.payload
            }
        },
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
        createTaskSuccess:(state, action)=>{
            return {
                ...state,
                currentTask: action.payload,
                currentTaskStatus: "succeeded"

            }
        },
        createTaskBegin: (state, action)=>{
            return {
                ...state,
                currentTaskStatus: "loading"
            }
        },
        createTaskError: (state, action)=>{
            return {
                ...state,
                currentTaskStatus: "failed",
                error: action.payload
            }
        }
    },
    extraReducers(builder){/** extra reducer user builder to do some async data fecth/requests and
                                we can add manual cases which needs to be handled for async requests */
        builder.addCase(fetchTasks.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchTasks.fulfilled, (state, action )=>{
            state.tasks = [...action.payload];
            state.status = 'succeeded'
        })
        .addCase(fetchTasks.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        // .addCase(createTask.fulfilled, (state, action)=>{
        //     state.currentTask = action.payload;
        //     state.currentTaskStatus = "succeeded"
        // })
        // .addCase(createTask.pending, (state, action)=>{
        //     state.currentTaskStatus = "loading";
        // })
        // .addCase(createTask.rejected, (state, action)=>{
        //     state.currentTaskStatus = "failed";
        //     state.error = action.error.message;
        // })
    }

})

export const selectAllTasks = (state)=>state.task.tasks;
export const selectStatus = (state)=>state.task.status;
export const selectError = (state)=>state.task.error;
export const selectCurrentTaskStatus = (state)=>state.task.currentTaskStatus;
export const selectTaskConfig = (state)=>state.task.taskConfig;
export const selectCurrentTask = (state)=>state.task.currentTask;

export const { addTask, createTaskSuccess, 
    createTaskBegin, createTaskError,
    fetchTaskConfigBegin, fetchTaskConfigSuccess,
    fetchTaskConfigError } = taskSlice.actions;

export default taskSlice.reducer;