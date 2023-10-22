import React, {useState, useEffect} from 'react'
import { communityPostObj } from '../../../config/communityPostObj'
import { useParams } from 'react-router-dom';
import CommunityPostCard from '../CommunityPostCard';

const Community = () => {
  const [posts, setPosts]= useState([]);
  const {channelId} = useParams();

  useEffect(()=> {
    getCommunityPost();
  }, [])

  const getCommunityPost= async()=> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };

    try {
      // const {contents} = await (await fetch(`https://youtube138.p.rapidapi.com/channel/community/?id=${channelId}`, options))
      setTimeout(()=> {
        Promise.resolve(setPosts(communityPostObj));
      }, 1500)
    } catch (error) {
      console.error(error);
    }
  }
  console.log(posts);

  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      {posts.length != 0 ? 
        posts.map((item, idx)=> 
          <CommunityPostCard key={idx} data={item.post}/>
        )
        :
        <h1>NO data NOW</h1>
      }
    </div>

  )
}

export default Community