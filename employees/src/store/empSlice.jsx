import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const allEmp = createAsyncThunk("allEmp", async ()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/todos");
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

