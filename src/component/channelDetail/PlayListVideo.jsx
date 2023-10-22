import React from 'react'
import VideoLength from '../../shared/videoLength';
import { getDate } from '../../utils/getDate'

const PlayListVideos = ({data}) => {
  return (
    <div className='flex text-white gap-x-3 mb-8 items-center'>
      <div><span>{data?.snippet?.position+1}</span></div>
      <div className='flex gap-x-3'>
        <div className='relative'>
          <img className="object-cover rounded-lg" src={data?.snippet?.thumbnails?.medium?.url} alt="" />
          {data?.video?.lengthSeconds && (<VideoLength time={data?.video?.lengthSeconds}/>)}
        </div>
        <div className='flex flex-col'>
          <p className='text-[16px] font-medium text-gray-200'>{data?.snippet?.title}</p>
          <div className='flex text-sm text-gray-400 gap-2'>
            <span >{data?.snippet?.channelTitle} . </span>
            <span>{getDate(data?.snippet?.publishedAt)}</span>
            {/* <span>{data?.video}</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayListVideos