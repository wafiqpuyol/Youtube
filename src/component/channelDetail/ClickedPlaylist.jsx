import React, {useEffect, useState} from 'react'
import {Link, useSearchParams } from 'react-router-dom'
import PlayListDetail from './PlayListDetail';
import PlayListVideo from './PlayListVideo';
import { getData } from '../../utils/getData';
import { playlistDetailObj }  from '../../config/playlistDetailObj';
import { playlistVideosObject_new } from '../../config/playlistVideosObj';



const ClickedPlaylist = () => {
  const [playlistDetails, setPlaylistDetails] = useState({});
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [searchParams, setUseSearchParams] = useSearchParams();

  useEffect(()=> {
    getPlaylistDetail()
    getPlaylistVideo()
  }, [])

  const getPlaylistDetail = async()=> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

      try {
        // const response= await (await  getData(`https://youtube138.p.rapidapi.com/playlist/details/?id=${searchParams.get("list")}&hl=en&gl=US`, options)).json()
        // setPlaylistDetails(response)

        setTimeout(()=> {
          Promise.resolve(setPlaylistDetails(playlistDetailObj));
        }, 1500)
      } catch (error) {
        console.error(error);
      }
  }

  const getPlaylistVideo = async()=> {
    const options = {
    method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    try {

      // const response= await (await  getData(`https://youtube138.p.rapidapi.com/playlist/details/?id=${searchParams.get("list")}&hl=en&gl=US`, options)).json();
      // const {items}= await (await  getData(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid%2C%20status&maxResults=50&playlistId=${searchParams.get("list")}&key=${import.meta.env.VITE_API_KEY}`)).json();
      // setPlaylistVideos(items)

      setTimeout(()=> {
        Promise.resolve(setPlaylistVideos(playlistVideosObject_new));
      }, 1500)
    } catch (error) {
      console.error(error);
    }
  }
  console.log(playlistVideos);
  console.log(playlistDetails);
  
  return (
    <div className='text-white flex w-full gap-6'>
      {!(playlistVideos.length && Object.keys(playlistDetails).length) ? searchParams.get("list")
        :
        <>
          <PlayListDetail data={playlistDetails}/>
          <div className='overflow-y-scroll w-[calc(100%-23rem)] pt-5 pr-6'>{playlistVideos.map((item, idx)=> <Link to={`/watch?v=${item?.contentDetails?.videoId}`} key={idx}> <PlayListVideo data={item}/> </Link>)}</div>
        </>
    }
    
    </div>
  )
}

export default ClickedPlaylist