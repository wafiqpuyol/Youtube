import React from 'react'
import VideoLength from "../../../shared/videoLength";
import { abbreviateNumber } from "js-abbreviation-number";

// h-[16rem] w-[19.5rem]

const ChannelVideoCard = ({video}) => {
  return (
    <div className={`flex flex-col mb-8 w-[19.7rem]`}>
        <div className={`relative h-full md:rounded-xl overflow-hidden`}>
            <img
                className="w-full object-cover"
                src={video?.thumbnails[3]?.url}
            />
            {video?.lengthSeconds && (
                <VideoLength time={video?.lengthSeconds} />
            )}
        </div>
        
        <div className="flex text-white mt-3">
            <div className="flex flex-col ml-3 overflow-hidden">
                <span className="text-sm font-bold line-clamp-2 text-white/80">
                    {video?.title}
                </span>
                <span className="text-[13.5px] font-semibold mt-2 text-white/[0.7] flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                </span>
                <div className="flex text-[13.5px] font-semibold text-white/[0.7] truncate overflow-hidden">
                    <span>{`${abbreviateNumber(
                        video?.stats?.views,
                        2
                    )} views`}</span>
                    <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                        .
                    </span>
                    <span className="truncate">
                        {video?.publishedTimeText}
                    </span>
                </div>
            </div>
        </div>
</div>
  )
}

export default ChannelVideoCard