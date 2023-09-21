import React, { useEffect } from 'react';
import Flex from './Flex';
import Image from './Image';
import userData from '../data/userData';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userListInfo, veiwDetailsInfo } from '../slices/userSlice';

const Users = () => {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    let handleProfile = (item) => {
        let arr = [item];
        dispatch(veiwDetailsInfo(arr));
        localStorage.setItem('userInfo', JSON.stringify(arr));
        navigate('/userprofile')
        console.log(arr)
    }

    useEffect(() => {

        dispatch(userListInfo(userData));

    }, []);

    let data = useSelector((state) => state.userListInfo.userInfo);

    return (
        <>
            <div className='pt-5 ml-2 md:ml-20'>
                <h2 className='font-inter font-semibold text-xl md:text-2xl text-[#32375C] mb-3'>User Lists</h2>
                <Flex className='md:flex md:flex-wrap md:gap-x-4 lg:gap-x-4'>

                    {data.map((item) => (
                        <div className='md:w-5/12 lg:w-1/5 p-3 mb-2 shadow-lg'>
                            <Image imgsrc={item.profilePicture} />
                            <h3 className='font-inter font-semibold text-base text-[#32375C] mt-3'>{item.name}</h3>
                            <p className='font-inter font-normal text-base text-[#7A7A7A]'>{item.email}</p>
                            <button onClick={() => handleProfile(item)} className='w-full bg-indigo-500 font-inter font-normal text-white text-sm text-center py-2 rounded-md mt-3 cursor-pointer hover:bg-white hover:text-indigo-500 hover:border hover:border-indigo-500 hover:ease-in duration-200 '>View Profile</button>
                        </div>
                    ))}

                </Flex>
            </div>

        </>
    )
}

export default Users;