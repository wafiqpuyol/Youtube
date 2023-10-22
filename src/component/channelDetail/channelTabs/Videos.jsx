import React, {useState, useEffect} from 'react'
import {getData} from '../../../utils/getData';
import { channelVideoObject } from '../../../config/channelVideos';
import ChannelVideoCard from './ChannelVideoCard';
import { Link, useParams  } from 'react-router-dom';


const Videos = () => {
  const [channelVideos, setChannelVideos] = useState([]);
  const {channelId} = useParams ();

  useEffect(()=> {
    getChannelVideos();
  }, [])

  const getChannelVideos =async()=> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    try {
      // const response = await (await fetch(`https://youtube138.p.rapidapi.com/channel/videos/?id=${channelId}&hl=en&gl=US`, options)).json();
      // console.log(response);
      setTimeout(()=> {
        Promise.resolve(setChannelVideos(channelVideoObject));
      }, 20);
      // console.log(channelVideoObject);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='flex flex-wrap mt-8 overflow-y-auto gap-6'>
        {channelVideos.length != 0 ? 
          channelVideos.map((item, idx)=> {
          return <Link to={`/watch/?v=${item.video.videoId}`} key={idx}> <ChannelVideoCard video={item.video}/> </Link>
        })
        : 
        <h1>No Data come yet</h1>}
    </div>
  )
}

export default Videos