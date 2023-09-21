import React from 'react';
import Flex from '../components/Flex';
import Sidebar from '../components/Sidebar';
import Users from '../components/Users';

const Home = () => {
    return (
        <Flex className='flex'>
            <div className='lg:w-1/6 min-h-screen shadow-lg'>
                <Sidebar />
            </div>
            <div className='w-5/6'>
                <Users />
            </div>
        </Flex>
    )
}

export default Home;