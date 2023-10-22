import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../feature/headerSlice'
import sidebarReducer from '../feature/sidebarSlice'
import searchQueryResultCacheReducer from '../feature/searchQueryResultCacheSlice'

export const store = configureStore({
    reducer: {
        header: headerReducer,
        sidebar: sidebarReducer,
        searchQueryResultCache: searchQueryResultCacheReducer
    },
})

export default store;