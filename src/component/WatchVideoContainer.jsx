import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from 'react-player/youtube'
import { getData } from '../utils/getData';
import { clickedVideoResult } from '../config/clickedVideoResult';
import { closeSideBar, toggleMenu } from '../feature/sidebarSlice';
import { relatedVideos } from '../config/relatedVideos';
import SuggestionVideoCard from './SuggestionVideoCard';

const WatchVideoContainer = () => {
  const [clickedVideoData, setClickedVideoData] = useState({});
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch()
  

  
  useEffect(()=> {
    // console.log(searchedVideoResult);
    // console.log(relatedVideos);
    dispatch(closeSideBar());
    getVideoData();
    getRelateVideoData();
    return ()=> {
      dispatch(toggleMenu());
    }
  }, [])

  const getRelateVideoData = async ()=> {
    const options = {
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };
    // const {contents} = await (await  getData('https://youtube138.p.rapidapi.com/video/related-contents/?id=ejAZ8SvxT3k&hl=en&gl=US', options)).json();;
    // console.log(contents);
    // setRelatedVideo(contents)
    setTimeout(()=> {
      Promise.resolve(setRelatedVideo(relatedVideos));
    }, 100)
  }

  const getVideoData = async()=> {
    const options = {
      headers: {
        'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    }
    
    // const response = await (await getData("https://youtube138.p.rapidapi.com/video/details/?id=ejAZ8SvxT3k&hl=en&gl=US", options)).json()
    // console.log(response);
    // setClickedVideoData(response)
    setTimeout(()=> {
      Promise.resolve(setClickedVideoData(clickedVideoResult));
    }, 100)
  }
  
  return (
    <>
      {isNaN(Object.keys(clickedVideoData)) ? 
        
      <div className=" flex justify-center w-full  overflow-y-auto ">
          <div className="flex flex-col max-w-[1280px] lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
              <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[690px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                  <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${searchParam.get("v")}`}
                      controls
                      width="100%"
                      height="100%"
                      style={{ backgroundColor: "#000000" , borderRadius: "2rem" }}
                      playing={true}
                  />
              </div>
              <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                  {clickedVideoData?.title}
              </div>
              <div className="flex justify-between flex-col md:flex-row mt-4">
                  <div className="flex">
                      <div className="flex items-start">
                          <div className="flex h-11 w-11 rounded-full overflow-hidden">
                            <Link to={`/channel/${clickedVideoData?.author?.channelId}`} >
                                <img
                                    className="h-full w-full object-cover"
                                    src={clickedVideoData?.author?.avatar[0]?.url}
                                />
                              </Link>
                          </div>
                      </div>
                      <div className="flex flex-col ml-3">
                          <div className="text-white text-md font-semibold flex items-center">
                          <Link to={`/channel/${clickedVideoData?.author?.channelId}`} >
                              {clickedVideoData?.author?.title}
                          </Link>
                              {clickedVideoData?.author?.badges[0]?.type ===
                                  "VERIFIED_CHANNEL" && (
                                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                              )}
                          </div>
                          <div className="text-white/[0.7] text-sm">
                              {clickedVideoData?.author?.stats?.subscribersText}
                          </div>
                      </div>
                  </div>
                  <div className="flex text-white mt-4 md:mt-0">
                      <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                          <AiOutlineLike className="text-xl text-white mr-2" />
                          {`${abbreviateNumber(
                              clickedVideoData?.stats?.views,
                              2
                          )} Likes`}
                      </div>
                      <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                          {`${abbreviateNumber(
                              clickedVideoData?.stats?.views,
                              2
                          )} Views`}
                      </div>
                  </div>
              </div>

          {/* 
          *
          *⁡⁣⁢⁣𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁⁡
          * 
          */}


          </div>
          <div className="flex flex-col py-6 px-4 lg:w-[350px] xl:w-[400px]">
              {relatedVideo.map((item, index) => {
                if (item.type === "playlist") return; 
                return <Link to={`?v=${item?.video?.videoId}`} key={index}> 
                  <SuggestionVideoCard
                      video={item.video}
                  />
                </Link>
              }
              )}
          </div>
      </div>
:
<h1>No data</h1>


    }
    
    </>
    
  )
}

export default WatchVideoContainer