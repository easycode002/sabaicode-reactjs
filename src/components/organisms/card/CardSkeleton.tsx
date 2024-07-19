import React from 'react'
import HeadPhone from '../../../assets/headphones.jpg';

const CardSkeleton:React.FC = () => {
  return (
    <div className='border p-4 shadow-2xl w-[80%] max-w-[500px]'>
        {/* image */}
        <div className='relative h-60 mb-4'>
            <img className='absolute w-full h-full object-cover rounded' src={HeadPhone} alt="" />
        </div>
        {/* text */}
        <div>
            <p className='font-bold text-2xl'>Apple Headphones</p>
            <div className='flex gap-5 pb-2'>
                <p className='text-xl'>Price:</p>
                <p className='font-bold text-xl'>$299</p>
                <p className='text-red-500 font-bold line-through text-xl'>$600</p>
            </div>
            <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit, suscipit commodi porro nemo pariatur sint explicabo harum repellat qui nesciunt.</p>
        </div>
    </div>
  )
}

export default CardSkeleton;
