import React from 'react'

const CommunityPostCard = ({data}) => {
    console.log(data);
  return (
    <div className='w-[52rem] flex justify-center items-center gap-6 mt-8 border-[1px] border-solid border-slate-500 p-6 rounded-2xl'>
        <div className='w-16 self-start'><img className="rounded-3xl object-cover " src={data.author?.avatar[1].url} alt="channel_avatar" /></div>
        <div className='flex flex-col gap-y-2'>
            <div className='flex gap-3 items-center'>
                <span className='font-bold text-[14px]'>{data?.author?.title}</span>
                <span className='text-[13px] font-semibold'>{data?.publishedTimeText}</span>
            </div>
            <p>{data?.text}</p>
        </div>
    </div>
  )
}

export default CommunityPostCard