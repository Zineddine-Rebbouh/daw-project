import React from 'react'
import Sidebar from '../components/Dashboard/sidebar/sidebar';

const DashBord = () => {

    return (

        <div className='w-full h-screen relative'>
            <div className="flex">
                <Sidebar />
                <div className='flex flex-col gap-2 py-12 px-10 w-full h-screen bg-[#f5f5f5]'>
                </div>
            </div>
        </div >

    )
}

export default DashBord
