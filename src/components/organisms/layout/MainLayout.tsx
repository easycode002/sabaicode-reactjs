import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div>
      <div className='flex justify-center items-center bg-neutral-500 h-32 sticky z-50 top-0'>
        <h1 className='font-bold text-5xl text-white'>Main Layout</h1>
      </div>
      {/* header */}
      <div>

      </div>

      {/* body */}
      <div>
        <Outlet />
      </div>

      {/* footer */}
      <div>

      </div>
    </div>
  )
}

export default MainLayout
