import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        results: []
    },
    reducers: {
        searchResults: (state,action)=>{
            state.results = action.payload
        }
    }
})

export const {searchResults} = searchSlice.actions;
export default searchSlice.reducer;