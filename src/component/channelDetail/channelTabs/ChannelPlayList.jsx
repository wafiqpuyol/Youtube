import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { channelPlaylist_new } from '../../../config/channelPlaylist'


const PlayListCard=({item})=> {
  // console.log(item);
  return <div className='flex flex-col w-60 mb-4'>
    <div><img src={item?.thumbnails?.standard?.url} alt="" className='rounded-lg'/></div>
    <div>
      <p className='text-[14.5px] font-bold mt-2 text-gray-300 mb-2'>{item.title}</p>
      <span className='text-[12.5px] text-gray-400 font-bold'>View full playList</span>
      </div>  
  </div>  
}

const ChannelPlayList = () => {
  const [playlists, setPlaylists] = useState([]);
  // const {channelId} = useParams ();

  useEffect(()=> {
    getChannelPlaylist();
  }, [])

  const getChannelPlaylist = ()=> {
    setTimeout(()=> {
      Promise.resolve(setPlaylists(channelPlaylist_new.items));
    }, 1500)
  }
  
  return  (
    <div className='flex flex-col'>
      <h2 className='my-12'>All Playlist</h2>
      <div className='flex flex-wrap gap-6'>
        {
          playlists.length !=0 ? playlists.map((item, idx) => <Link to={`/playlist?list=${item.id}`} key={idx}><PlayListCard item={item.snippet}/></Link>) : <h2>No data has arrived yet at your home</h2>
        }
      </div>
    </div>
  )
}

export default ChannelPlayList




// AIzaSyD7ViNcyEWf2AbLWc8WR1u_3hgLbaKtRWo