import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../utils/getData';
import { searchedVideoResult } from '../config/searhedVideoResult';
import SearchedVideoCard from './SearchedVideoCard';

const SearchedVideosContainer = () => {
  const [searchParam] = useSearchParams();
  const [searchedQueryResult ,setSearchedQueryResult] = useState([]);

  useEffect(()=> {
    getSearchedData();
  },[])

  const getSearchedData =async()=> {
    const options = {
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    // const response = await (await getData(`https://youtube138.p.rapidapi.com/search/?q=${searchParam.get("search_query")}&hl=en&gl=US`, options)).json();
    // console.log(response);
    // setSearchedQueryResult(response.contents)
    setTimeout(()=> Promise.resolve(setSearchedQueryResult(searchedVideoResult.contents)), 200)
  }

  // console.log(searchedQueryResult);

  return (
    <div className="flex justify-center grow w-[calc(100%-240px)] h-full overflow-y-auto">
      <div className='flex flex-col w-8/12 items-start gap-2 p-5'>
        {searchedQueryResult.length > 0 ?
            searchedQueryResult.map((item,index) => {
              return <SearchedVideoCard key={index} video={item}/>
            })
            :
            <h1 className='text-white'>No Data found</h1>
        }
        </div>
    </div>
  )
}

export default SearchedVideosContainer