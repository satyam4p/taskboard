import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';
import drawerReducer from '../features/Drawer/drawerSlice';


export const store = configureStore({
    reducer:{
        task: taskReducer,
        drawer: drawerReducer,
        comments:{},
        user:{}
    }
})



