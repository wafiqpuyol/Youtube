import React from 'react'
import PropTypes from 'prop-types'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from '../shared/videoLength';
import { Link } from 'react-router-dom';
import SubscribeButton from './SubscribeButton'

const SearchedVideoCard = ({video}) => {
    // console.log(video);

    return (
        <>
        {/* <Link></Link> */}
        <div className={video.type === "channel" ? "flex justify-center" : ""}>
            <div className="flex flex-col md:flex-row mb-8 md:mb-3 rounded-xl md:p-4">
                        <div className={(video?.type === "channel" ? "rounded-full xl:w-40 xl:h-40 self-center mr-10 " : "rounded-lg xl:w-[23rem] xl:h-52 ") + " relative flex shrink-0 h-48 md:h-28 lg:h-40 w-full md:w-48 lg:w-64   bg-slate-800 overflow-hidden"}>
                            <Link to={video.type === "channel" ? `/channel/${video?.channel?.channelId}` : `/watch?v=${video?.video?.videoId}`}>
                                <img
                                    className="h-full w-full object-cover"
                                    src={video.type === "channel" ? video?.channel?.avatar[1]?.url : video?.video?.thumbnails[0]?.url}
                                />
                                {video?.video?.lengthSeconds && (
                                    <VideoLength time={video?.video?.lengthSeconds} />
                                )}
                            </Link>
                        </div>
                    <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
                        <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-white">
                            {video.type === "channel" ? (video?.channel?.title) : (video?.video?.title)}
                        </span>
                        <div className="hidden md:flex items-center">
                            <div className="flex flex-col">
                                <div className="flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden">
                                    <span>{`${abbreviateNumber(
                                        (video?.type === "channel" ? (video?.channel?.stats?.subscribers) : (video?.video?.stats?.views)),
                                        0
                                    )} views`}</span>
                                    <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                                        .
                                    </span>
                                    <span className="truncate">
                                        {video?.video?.publishedTimeText}
                                    </span>
                                </div>
                                <div className='flex mt-3'>
                                    <div className="flex items-start mr-3">
                                    <div className="flex h-9 w-9 rounded-full overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={video?.type === "channel" ? (video?.channel?.avatar[0].url) : (video?.video?.author?.avatar[0]?.url)}
                                        />
                                    </div>
                                    </div>
                                    <span className="text-sm font-semibold mt-2 text-white/[0.7] flex items-center">
                                        {video?.type === "channel" ? (video?.channel?.username) : (video?.video?.author?.title)}
                                        {(video?.type === "channel" ? (video?.channel?.badges[0].type) : (video?.video?.author?.badges[0]?.type)) ===
                                            "VERIFIED_CHANNEL" && (
                                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4">
                            {video?.type === "channel" ? (video?.channel?.descriptionSnippet) : (video?.video?.descriptionSnippet)}
                        </span>
                    </div>
            </div>

            {video.type === "channel" && <SubscribeButton/>}  
        </div>
        {video.type === "channel" && <hr className="my-5 border-white/[0.2]" />}
        </>
    )
}

SearchedVideoCard.propTypes = {
    video: PropTypes.object
}

export default SearchedVideoCard
















//   return (
//     <div className='flex flex-col'>
//         <div><img src={video?.video?.thumbnails[0].url} alt="" /></div>
//         <div></div>
//         {/* <div><button className='text-white'>Subscribe</button></div> */}
//     </div>
//   )