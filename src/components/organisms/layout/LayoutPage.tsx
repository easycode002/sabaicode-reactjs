import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPage:React.FC = () => {
  return (
    <div>
        {/* header stricky */}
        <div className='bg-neutral-400 h-12 sticky top-0 justify-center items-center flex font-bold text-3xl'>
            Header stricky
        </div>

        {/* sub header */}
        <div>
            <h1>Sub Header</h1>
        </div>

        {/* body */}
        <div>
            <Outlet/>
        </div>

        {/* footer */}
        <div>
            
        </div>
    </div>
  )
}

export default LayoutPage
