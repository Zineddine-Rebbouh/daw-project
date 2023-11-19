import React from 'react'

const Card = ( { Number, Cardname, color, bgColor, icon, growthPercentage } ) => {
    return (
        <div className={ `relative flex flex-col bg-red w-full h-50 py-3 px-5 ${ color } rounded-lg` }>
            <div className='flex items-center gap-4'>
                <span className={ `flex items-center justify-center  ${ bgColor }  rounded-full w-9 h-9 text-white` }>
                    { icon }
                </span>
                <span className='text-2xl font-semibold text-blue-900'>{ Cardname }</span>
            </div>
            <span className='text-2xl font-semibold my-2'>{ Number }</span>
            <span className='text-blue-500 font-semibold'>{ growthPercentage }% from yestardy</span>
        </div>
    )
}

export default Card
