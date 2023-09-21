import React from 'react';
import Flex from '../components/Flex';
import Sidebar from '../components/Sidebar';
import ViewProfile from '../components/ViewProfile';

const UserProfile = () => {

    return (
        <Flex className='flex'>
            <div className='md:w-1/6 min-h-screen shadow-lg'>
                <Sidebar />
            </div>
            <div className='w-5/6 min-h-screen pt-5 ml-20'>
                <ViewProfile />
            </div>
        </Flex>
    )
}

export default UserProfile;