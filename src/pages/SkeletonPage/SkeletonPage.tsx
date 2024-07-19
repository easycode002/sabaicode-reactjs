import React, { useEffect, useState } from 'react'
import CardSkeleton from '../../components/organisms/card/CardSkeleton'
import Skeleton from '../../components/organisms/card/Skeleton'

const SkeletonPage: React.FC = () => {
    // create new state
    const [loading, setLoading] = useState(true);
    // useEffect
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <div className='flex justify-center items-center h-screen gap-x-20 px-32'>
            {loading ? <Skeleton /> : <CardSkeleton />}
        </div>
    )
}

export default SkeletonPage
