import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { channelDetailObject } from '../../config/channelDetail';
import {abbreviateNumber} from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from "react-icons/bs";
import {getData} from '../../utils/getData';


const Banner =({data})=> {
	return <div className='w-full'>
		<img src={data?.desktop[5]?.url} alt="banner" />
	</div>

}
const ChannelHeader =({avatar, title,canonicalBaseUrl, description, stats, badges})=> {
	return <div className='flex my-8 items-center gap-8'>
		<div>
			<img className="rounded-full" src={avatar[2]?.url} alt="" />
		</div>

		<div className='flex flex-col gap-2'>
			<div className='flex'>
				<h1>{title}</h1>
				{badges[0]?.type ==="VERIFIED_CHANNEL" 
					&&
				(<BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />)}
			</div>
			<div className='flex items-center gap-4'>
				<p>{canonicalBaseUrl.replace("/", "")}</p>
				<div className="text-white/[0.7] text-sm">{stats?.subscribersText}</div>
				<p>{stats?.videosText}</p>
				<p>{`${abbreviateNumber(stats?.views,2)} Views`}</p>
			</div>
			<div> <Link to={"about"}> <p className='text-base font-bold line-clamp-6 text-white/80'>{description.substring(0, 80)+ "..."}</p></Link></div>
		</div>
	</div>
}

const Tabs = ({tabs})=> {
	return <div className='flex items-center gap-9 mb-5 justify-evenly w-[90%]'>
		{tabs.map((tab, idx)=> <div key={idx}> <Link to={`${tab == "HOME" ? "featured" : tab.toLowerCase()}`}>{tab}</Link></div>)}
	</div>
}

const ChannelDetail = () => {
	const [channelDetail ,setChannelDetail] = useState({});
	const {channelId} = useParams();
	const tabs= ["HOME", "VIDEOS", "PLAYLISTS", "COMMUNITY", "CHANNELS", "ABOUT"];

	useEffect(()=> {
		getChannelDetail();
	}, [])
	const getChannelDetail =async()=> {
		const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f46785940bmsh38cf99b399735d4p121555jsn39578229acd0',
			'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
		}
	};

		// const response = await (await getData('https://youtube138.p.rapidapi.com/channel/details/?id=UCpqXJOEqGS-TCnazcHCo0rA&hl=en&gl=US', options)).json();
		// console.log(response);
		setTimeout(()=> {
			Promise.resolve(setChannelDetail(channelDetailObject));
		}, 10);
	}

	return (
		<>
			{
				Object.keys(channelDetail).length !== 0 
				? 
				<div className='text-white w-full flex flex-col overflow-y-auto'>
					<Banner data={channelDetail.banner}/>
					<div className='flex flex-col w-4/5 mx-auto items-start'>
						<ChannelHeader {...channelDetail}/>
						<Tabs tabs={tabs}/>
						<hr className='w-full border-white/[0.2] overflow-auto'></hr>
						<Outlet/>
					</div>
				</div>
				:
				<h1 className='text-white'>No data now</h1>
			}
		</>
	)
}

export default ChannelDetail


/**
 * avatar
 * title
 * subs, view
 * description
 * canonical base url
 * 
 * 
 * 
 * 
 */

