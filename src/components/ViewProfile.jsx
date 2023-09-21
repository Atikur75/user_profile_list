import React from 'react';
import Flex from '../components/Flex';
import Image from '../components/Image';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewProfile = () => {

    let navigate = useNavigate();

    let data = useSelector((state) => state.userListInfo.veiwDetails);

    let handleBack = () => {
        navigate('/');
    }

    return (


        <div className='px-7 py-4 mb-2 shadow-lg absolute top-4 left-[35%] md:left-[20%]'>
            {data.map((item) => (
                <>
                    <h2 className='font-inter font-semibold text-center text-2xl text-[#32375C] mb-3'>User Profile</h2>
                    <Image imgsrc={item.profilePicture} className='w-52 h-52 mx-auto' />
                    <h3 className='font-inter font-semibold text-center text-base text-[#32375C] mt-3'>{item.name}</h3>
                    <p className='font-inter font-normal text-center text-base text-[#7A7A7A]'>{item.email}</p>
                    <h3 className='font-inter font-semibold text-xl text-[#32375C] mt-4'>About</h3>
                    <p className='font-inter font-normal text-base text-[#7A7A7A]'>{item.about}</p>
                    <h3 className='font-inter font-semibold text-xl text-[#32375C] mt-4'>Education</h3>
                    <Flex className='lg:flex items-center mt-3 gap-x-4 cursor-pointer'>
                        <div className='mb-3 lg:mb-0'>
                            <Image imgsrc={item.uniPicture} className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                            <h3 className='font-inter font-semibold text-base text-[#32375C]'>{item.uniName}</h3>
                            <p className='font-inter font-normal text-base text-[#7A7A7A]'>{item.uniDegree}</p>
                        </div>
                    </Flex>
                    <h3 className='font-inter font-semibold text-xl text-[#32375C] mt-4'>Experience</h3>
                    <Flex className='lg:flex items-center mt-3 gap-x-4 cursor-pointer'>
                        <div className='mb-3 lg:mb-0'>
                            <Image imgsrc={item.logo} className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                            <h3 className='font-inter font-semibold text-base text-[#32375C]'>{item.expName}</h3>
                            <p className='font-inter font-normal text-base text-[#7A7A7A]'>{item.expDegi}</p>
                        </div>
                    </Flex>
                    <button onClick={handleBack} className='bg-red-700 font-inter font-normal text-white text-sm text-center py-3 px-7 rounded-md mt-10 cursor-pointer hover:bg-white hover:text-red-700 hover:border hover:border-red-700 hover:ease-in duration-200 '>Back</button>
                </>
            ))}

        </div>
    )
}

export default ViewProfile;