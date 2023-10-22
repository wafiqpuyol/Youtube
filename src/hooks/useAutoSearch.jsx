import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {cacheQuerySuggestion} from '../feature/searchQueryResultCacheSlice'

export const useAutoSearch = (query)=> {
    const [suggestion, setSuggestion ] = useState([]);
    const dispatch = useDispatch();

    const getSuggestion =async (query) => {
        const data = (await (await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`)).json())[1];
        // console.log(data);
        setSuggestion(data);
        dispatch(cacheQuerySuggestion({
            [query]:data
        }))
    }

    return {suggestion, setSuggestion ,getSuggestion}
}