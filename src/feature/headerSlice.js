import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { singleSearchValue } from "../singleSearchValue";

const initialState = {
    data: [],
    isLoading: false,
    mobileMenu: false,
}

export const fetchContent = createAsyncThunk(
    'header/fetchContent',
    async (query) => {
        // const { items } = await (await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`)).json();
        const items = await (await new Promise((resolve) => {
            setTimeout(() => {
                resolve(singleSearchValue[18]);
            }, 200)
        }));
        // console.log(items);
        return items;
    }
)

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})


export const { isLoading } = headerSlice.actions;
export default headerSlice.reducer;