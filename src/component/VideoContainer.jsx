import React, {useEffect, useState} from 'react'
import VideoCard from './VideoCard'
import { feedData } from '../config/feedData';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer'
import { isLoading } from '../feature/headerSlice';
import { useDispatch } from 'react-redux';



const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    getFeedData();
  },[])
  
  const getFeedData =async()=> {
    // dispatch(isLoading())
    const options = {
      method :"Get",
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    }
    // const {contents} =await (await fetch("https://youtube138.p.rapidapi.com/home/?hl=en&gl=US", options)).json()
    // console.log(contents);
    // setVideos(contents)
    // dispatch(isLoading())
    setTimeout(()=> {
      Promise.resolve(setVideos(feedData));
    }, 1500)

  }

  return (
    <div className = "w-full p-5 grid grid-cols-1 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.length >0 ? videos.map((item, index)=>{
        return <Link to={`watch?v=${item?.video?.videoId}`} key={index}>
          <VideoCard video={item.video}/>
          </Link>
      })
      : Array.from({length:15}).map((_,index) => <Shimmer key={index}/>)
    }
    </div>
  
  )
}

export default VideoContainer