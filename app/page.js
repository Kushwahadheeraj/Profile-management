'use client';

import Image from 'next/image';
import { useState } from 'react';
import Photo from '../public/hero.png';
import Avt from '../public/Avatar.png';
import Page from '../public/page.png';
export default function Home() {
  const [activeTab, setActiveTab] = useState('profile');
  const [form, setForm] = useState({
    name: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    dob: '25 January 1990',
    username: 'Charlene Reed',
    password: '********',
    address: 'San Jose, California, USA',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='min-h-screen bg-purple-50'>
      {/* Top Bar */}
      <div className='relative w-full px-4 lg:px-0'>
        <div className='abc w-[1334px] h-[71px] relative lg:absolute lg:top-[6px] left-[99px] bg-[ffffff] shadow rounded-[7px] flex items-center justify-between py-3 px-4 pr-[12px] lg:px-[22px] mx-auto'>
          <div className='flex items-center gap-2'>
          <Image
                src={Page}
                alt='Profile'
                className='w-[269px] h-[40px] object-cover'
              />
           
            
          </div>
          <div className='flex items-center w-[377px] h-[47px] gap-[33px]'>
            <div className='relative hidden sm:block'>
              <input
                type='text'
                placeholder='Search'
                className='px-4 py-2 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 absolute right-3 top-2.5 text-gray-900'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <div className='relative border rounded-full p-2'>
              <div className='absolute top-1 -right-1 w-2 h-2 bg-red-500 rounded-full'></div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </div>
            <div className='w-10 h-10 rounded-full bg-gray-200 overflow-hidden'>
              <Image
                src={Avt}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row mt-6 lg:mt-0 px-4 lg:px-0'>
        {/* Sidebar */}
        <div className='w-[100px] h-[913px] bg-[fefeff] flex flex-col items-center shadow rounded-[22px]'>
          {/* Logo/Initial */}
          <div className='w-[58px] h-[52px] mt-[30px] ml-[21px]'>
            <span className='text-2xl font-bold text-purple-600'>A</span>
          </div>

          {/* Navigation Icons */}
          <div className='flex flex-col items-center w-[60px] h-[348px] gap-[32px] mt-[123px]'>
            {/* Home Icon */}
            <button className='text-gray-400 hover:text-purple-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </button>

            {/* Refresh or Sync */}
            <button className='text-gray-400 hover:text-purple-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4v5h.582M20 20v-5h-.581M19.418 15.418A7.968 7.968 0 0020 12c0-4.418-3.582-8-8-8a7.96 7.96 0 00-6.418 3.418M4.582 8.582A7.968 7.968 0 004 12c0 4.418 3.582 8 8 8a7.96 7.96 0 006.418-3.418'
                />
              </svg>
            </button>

            {/* Image Icon */}
            <button className='text-gray-400 hover:text-purple-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 15l-5.586-5.586a1 1 0 00-1.414 0L10 13l-2.586-2.586a1 1 0 00-1.414 0L3 13'
                />
              </svg>
            </button>

            {/* Folder or Documents Icon */}
            <button className='text-gray-400 hover:text-purple-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z'
                />
              </svg>
            </button>

            {/* Settings Icon (Active) */}
            <button className='text-purple-600 bg-purple-100 p-2 rounded-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </button>
          </div>

          {/* Logout Icon at Bottom */}
          <button className='mt-auto mb-8 text-gray-400 hover:text-purple-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          </button>
        </div>

        {/* Profile Form */}
        <div className='jhi w-[1282px] h-[554px] absolute top-[96px] left-[110px]'>
          <div className='min-h-screen bg-[#fbfbfb] p-8'>
            <div className='flex gap-20'>
              <button
                onClick={() => setActiveTab('profile')}
                className={`pb-2 ${
                  activeTab === 'profile'
                    ? 'border-b-4 w-42 border-purple-600 text-purple-600 font-medium'
                    : 'text-gray-400 w-[68px] h-[18px]'
                }`}
              >
                Edit Profile
              </button>
              <button
              // onClick={() => setActiveTab('bank')}
              // className={`pb-2 ${activeTab === 'bank'
              //     ? 'border-b-6 border-purple-600 text-purple-600 font-medium'
              //     : 'text-gray-400'
              //   }`}
              >
                Bank Details
              </button>
              <button
              // onClick={() => setActiveTab('security')}
              // className={`pb-2 ${activeTab === 'security'
              //     ? 'border-b-2 border-purple-600 text-purple-600 font-medium'
              //     : 'text-gray-400'
              //   }`}
              >
                Security
              </button>
            </div>
            {activeTab === 'profile' && (
              <div className='flex items-start space-x-10 pt-6'>
                {/* Profile Picture */}
                <div className='flex flex-col items-center'>
                  <div className='relative w-[155.86px] h-[155px] mt-[46px] pl-[153.14px] rounded-full overflow-hidden'>
                    <Image
                      src={Photo} // make sure this image exists in /public
                      alt='Profile'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <button className='flex z-10 mt-[-50px] ml-32 items-center bg-purple-600 text-white px-2 py-2 rounded-full text-sm'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                      />
                    </svg>
                  </button>
                </div>

                {/* Form */}
                <div className='w-[928.42px] h-[217px] mt-[42px] ml-[74px] max-w-4xl grid grid-cols-2 gap-[45px]'>
                  <div>
                    <label className='text-gray-600'>Your Name</label>
                    <input
                      className='w-[441px] h-[40px] mt-1 p-2 rounded bg-purple-100 text-[#5A0B85]'
                      defaultValue='Charlene Reed'
                    />
                  </div>
                  <div>
                    <label className='text-gray-600'>User Name</label>
                    <input
                      className='w-[441px] h-[40px] mt-1 p-2 rounded bg-purple-100 text-[#5A0B85]'
                      defaultValue='Charlene Reed'
                    />
                  </div>
                  <div>
                    <label className='text-gray-600'>Email</label>
                    <input
                      className='w-[441px] h-[40px] mt-1 p-2 rounded bg-purple-100 text-[#5A0B85]'
                      defaultValue='charlenereed@gmail.com'
                    />
                  </div>
                  <div>
                    <label className='text-gray-600'>Password</label>
                    <input
                      type='password'
                      className='w-[441px] h-[40px] mt-1 p-2 rounded bg-purple-100 text-[#5A0B85]'
                      defaultValue='********'
                    />
                  </div>
                  <div>
                    <label className='text-gray-600'>Date of Birth</label>
                    <input
                      type='date'
                      className='w-[441px] h-[40px] mt-1 p-2 rounded bg-purple-100 text-[#5A0B85]'
                      defaultValue='1990-01-25'
                    />
                  </div>
                  <div>
                    <label className='text-gray-600'>Present Address</label>
                    <input
                      className='w-[441px] h-[40px] mt-1 p-2 rounded bg-purple-100 text-[#5A0B85]'
                      defaultValue='San Jose, California, USA'
                    />
                  </div>
                </div>
              </div>
            )}
            <div className='mt-[189px]  text-right pr-16'>
              <button className='bg-gradient-to-r w-[224.31px] h-[40px] from-purple-500 to-purple-700 text-white px-6 py-2 rounded-xl'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
