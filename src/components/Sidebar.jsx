import React, { useEffect } from 'react';
import { AiOutlineHome, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { TbFriends } from 'react-icons/tb';
import { IoPeopleCircle } from 'react-icons/io5';
import Flex from './Flex';
import Image from './Image';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loginData from '../data/loginData';
import { userloginInfo } from '../slices/userSlice';

const Sidebar = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(userloginInfo(loginData));
    }, []);

    let data = useSelector((state) => state.userListInfo.loginInfo);

    let handleProfile = (item) => {
        navigate('/userprofiledetails');
        console.log('logigi', item);
    }

    return (
        <>
            <div className='p-5'>
                <div className='mb-14'>
                    {data.map((item) => (
                        <>
                            <div className='mb-3'>
                                <Image imgsrc={item.profilePicture} className='w-16 h-16 rounded-full' />
                            </div>
                            <div>
                                <h3 className='font-inter font-semibold text-base text-[#32375C]'>{item.name}</h3>
                                <p className='font-inter font-normal text-sm text-[#7A7A7A] break-all'>{item.email}</p>
                            </div>
                            <button onClick={() => handleProfile(item)} className='font-inter font-normal mt-2 text-indigo-500 text-sm cursor-pointer'>View Profile</button>
                        </>
                    ))}

                </div>
                <Link to='/'>
                    <Flex className='flex items-center gap-x-2 mb-7 font-inter font-normal text-[#222222] text-lg hover:bg-[#32375C] hover:p-3 hover:text-white hover:rounded-md hover:cursor-pointer hover:ease-in duration-200'>
                        <AiOutlineHome />
                        Home
                    </Flex>
                </Link>
                <Flex className='flex items-center gap-x-2 mb-7 font-inter font-normal text-[#222222] text-lg hover:bg-[#32375C] hover:p-3 hover:text-white hover:rounded-md hover:cursor-pointer hover:ease-in duration-200'>
                    <BsChatLeft />
                    Chat
                </Flex>
                <Flex className='flex items-center gap-x-2 mb-7 font-inter font-normal text-[#222222] text-lg hover:bg-[#32375C] hover:p-3 hover:text-white hover:rounded-md hover:cursor-pointer hover:ease-in duration-200'>
                    <AiOutlineUsergroupAdd />
                    Group
                </Flex>
                <Flex className='flex items-center gap-x-2 mb-7 font-inter font-normal text-[#222222] text-lg hover:bg-[#32375C] hover:p-3 hover:text-white hover:rounded-md hover:cursor-pointer hover:ease-in duration-200'>
                    <TbFriends />
                    Friends
                </Flex>
                <Flex className='flex items-center gap-x-2 mb-7 font-inter font-normal text-[#222222] text-lg hover:bg-[#32375C] hover:p-3 hover:text-white hover:rounded-md hover:cursor-pointer hover:ease-in duration-200'>
                    <IoPeopleCircle />
                    People
                </Flex>

            </div>
        </>
    )
}

export default Sidebar