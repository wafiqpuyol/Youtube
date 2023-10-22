import { createSlice } from "@reduxjs/toolkit";

const searchQueryResultCacheSlice = createSlice({
    name: "searchQueryCacheResult",
    initialState: {
        cachedAutoSuggestions: {},
        searchedQuery: ""
    },
    reducers: {
        cacheQuerySuggestion: (state, action) => {
            state.cachedAutoSuggestions = { ...state.cachedAutoSuggestions, ...action.payload };
        },

        searchQuery: (state, action) => {
            state.searchedQuery = action.payload;
        }
    }
})

export const { cacheQuerySuggestion, searchQuery } = searchQueryResultCacheSlice.actions;
export default searchQueryResultCacheSlice.reducer;