import React from 'react'
import Card from './../../components/Dashboard/Cards/Card';
import { TbBrandGoogleAnalytics, TbUserShield, TbUsersPlus } from 'react-icons/tb';
import { FaUserDoctor, FaUsers } from "react-icons/fa6";


const OverviewView = () => {

    const Cards = [
        {
            name: 'Total Users',
            Number: 155,
            icon: <FaUsers size={ 22 } />,
            growth: 2
            ,
            CardColor: 'bg-[#CCFFFF]', bgColor: 'bg-[#3fb7db]'
        },
        {
            name: 'Total Patients',
            Number: 135,
            icon: <TbUserShield size={ 22 } />
            ,
            growth: 6
            ,
            CardColor: 'bg-[#FFCCCC]', bgColor: 'bg-[#eb4f4f] '
        },
        {
            name: 'Total Doctor',
            Number: 20,
            icon: <FaUserDoctor size={ 22 } />,
            growth: 4
            ,
            CardColor: 'bg-[#CCFFE5]', bgColor: 'bg-[#18c566]'
        },
        {
            name: 'New Users',
            Number: 15,
            icon: <TbUsersPlus size={ 22 } />,
            growth: 2
            ,
            CardColor: 'bg-[#E5CCFF]'
            , bgColor: 'bg-[#bb2be7]'
        },
    ]
    return (
        <div className='flex flex-wrap items-center gap-3 w-full h-90 bg-white px-4 pt-14  pb-7 rounded-lg'>
            {
                Cards.map( ( card, index ) => (
                    <div key={ card.name } className='flex flex-1 border-1 border-gray-500  rounded-lg'>
                        <Card Number={ card.Number } color={ card.CardColor } bgColor={ card.bgColor } growthPercentage={ card.growth } icon={ card.icon } Cardname={ card.name } />
                    </div>
                ) )
            }
        </div>
    )
}

export default OverviewView