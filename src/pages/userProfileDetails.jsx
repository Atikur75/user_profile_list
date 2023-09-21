import React from 'react';
import Flex from '../components/Flex';
import Sidebar from '../components/Sidebar';
import ViewUserProfile from '../components/ViewUserProfile';

const UserProfileDetails = () => {
    return (
        <Flex className='flex'>
            <div className='md:w-1/6 min-h-screen shadow-lg'>
                <Sidebar />
            </div>
            <div className='w-5/6 min-h-screen pt-5 ml-20'>
                < ViewUserProfile/>
            </div>
        </Flex>
    )
}

export default UserProfileDetails;