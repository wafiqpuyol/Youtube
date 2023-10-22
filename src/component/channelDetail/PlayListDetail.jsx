import React from 'react'
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import playlistPlayBtn from '../../styles/playlistPlayBtn.module.css'



const PlayListDetail = ({data}) => (
        <div className='md:w-[23rem] overflow-y-auto flex flex-col p-6 bg-gradient-to-b from-zinc-700 to-gray-900 rounded-2xl mr-3'>
            <div className='object-cover'><img className="rounded-xl overflow-hidden" src={data?.thumbnails[3]?.url} alt="" /></div>
            <div className='flex flex-col gap-3'>
                <h1 className='my-4 font-bold text-xl'>{data?.title}</h1>
                <Link to={`/channel/${data?.author?.channelId}`}><p className="text-base font-semibold">{data?.author?.title}</p></Link>
                <div className='flex gap-1 text-sm font-semibold text-gray-300'>
                    <span>{data.stats.videos} videos</span>
                    <span>{data?.stats.views} views</span>
                    <span className="truncate">{data.updatedTimeText}</span>
                </div>
                <div className='flex gap-4'>
                    <button className={playlistPlayBtn.button29}>Play all</button>
                    <button className={playlistPlayBtn.button29}>Shuffle</button>
                </div>
            </div>
            <div><p>{data?.description ? data?.description : ""}</p></div>
        </div>
        
    )

export default PlayListDetail