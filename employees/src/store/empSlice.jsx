import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const allEmp = createAsyncThunk("allEmp", async ()=>{
    const response = await axios.get("");
    console.log(response);
    return response.json; 
});


const empDetails = createSlice({
    name: "employeeDetail",
    initialState: {
        isLoading: false,
        data: null,

    },

    extraReducers: (builder)=>{
        builder.addCase(allEmp.pending, (state,action)=>{
            state.isLoading= true;

        });
        builder.addCase(allEmp.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.data = action.payload;
        });
        builder.addCase(allEmp.rejected, (state, action)=>{
            console.log('Error', action.payload);
            state.isLoading= true;
        });
    }
});
export default empDetails.reducer;

