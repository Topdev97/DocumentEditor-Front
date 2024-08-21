'use client';

import { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/input';
interface IRepliesProps { }

interface TableData {
    project: string;
    replies: string;
    action: string;
}

const data: TableData[] = [
    { project: 'Project A', replies: '10', action: 'View' },
    { project: 'Project B', replies: '20', action: 'Edit' },
];


const Replies: FC<IRepliesProps> = (props: any) => {
    const [checkboxValue, setCheckboxValue] = useState(false);
    return (
        <>
            <div className='max-w-[928px] mx-auto'>
                <p className=' font-lato text-[22px] font-semibold text-white'>Replies</p>
                <div className='max-w-[626px] mx-auto text-center bg-[#0260c2] pt-[2px] pb-8 mt-10'>
                    <h3 className='text-yellow-500 font-roboto text-[30px] font-bold mt-4 leading-[40px]'>
                        Want 3 more keywords and 3 more replies each month for
                        <span className='underline'> FREE?</span>
                    </h3>
                    <button className='max-w-[300px] text-[25px] leading-[30px] font-bold bg-yellow-500 text-blue-900 text-center py-2 px-10 rounded-[80px] mt-4'>YES! UNLOCK MY SPECIAL OFFER!</button>
                </div>
                <div className='bg-[#151E36] px-7 py-4 mt-8 rounded-2xl flex items-center justify-between border-[0.5px] border-[#2c344a] whitespace-nowrap md:whitespace-normal overflow-auto md:gap-8 gap-5 no-scrollbar'>
                    <select className='bg-[#232b42] text-white py-2 h-10 px-4 rounded'>
                        {data.map((row, index) => (
                            <option key={index} value={row.project}>{row.project}</option>
                        ))}
                    </select>
                    <div className='flex items-center gap-3'>
                        <Input
                            className=""
                            type="checkbox"
                            name="insightsCheckbox"
                            value={checkboxValue}
                            setValue={setCheckboxValue}
                        />
                        <label className='font-inter font-normal text-l text-white'>Reddit</label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Input
                            className="bg-[#232b42]"
                            type="checkbox"
                            name="insightsCheckbox"
                            value={checkboxValue}
                            setValue={setCheckboxValue}
                        />
                        <label className='font-inter font-normal text-l text-white'>X</label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Input
                            className="bg-[#232b42]"
                            type="checkbox"
                            name="insightsCheckbox"
                            value={checkboxValue}
                            setValue={setCheckboxValue}
                        />
                        <label className='font-inter font-normal text-l text-white'>Facebook Groups</label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Input
                            className="bg-[#232b42]"
                            type="checkbox"
                            name="insightsCheckbox"
                            value={checkboxValue}
                            setValue={setCheckboxValue}
                        />
                        <label className='font-inter font-normal text-l text-white'>Youtube Comments</label>
                    </div>
                </div>
                <div className='bg-keywords-gradient w-full text-center py-4 border-[0.5px] border-[#008CFC42] rounded-[10px] mt-8'>
                    <p className='text-white font-lato font-normal text-xl'>You have used up 10 of your 25 replies this month</p>
                </div>
                <div className='bg-[#151E36] px-7 py-3 my-7 rounded-2xl items-center border-[0.5px] border-[#2c344a]'>
                    <div className='md:flex justify-between'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <p className='font-lato text-2xl text-white font-bold'>Keywords:</p>
                                <p className='font-inter font-normal text-l text-white'>Text-To-Video</p>
                            </div>
                            <p className='font-light text-s text-white font-inter mt-2'>“Title of post or comment”</p>
                            <p className='font-poppins font-normal text-s text-white italic mt-6'>Gunnar</p>
                        </div>
                        
                        <p className='font-poppins font-normal text-s text-white italic'>1 day ago</p>
                    </div>
                </div>
                <div className='bg-[#151E36] px-7 py-3 my-7 rounded-2xl items-center border-[0.5px] border-[#2c344a]'>
                    <div className='md:flex justify-between'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <p className='font-lato text-2xl text-white font-bold'>Keywords:</p>
                                <p className='font-inter font-normal text-l text-white'>Text-To-Video</p>
                            </div>
                            <p className='font-light text-s text-white font-inter mt-2'>“Title of post or comment”</p>
                            <p className='font-poppins font-normal text-s text-white italic mt-6'>Gunnar</p>
                        </div>
                        
                        <p className='font-poppins font-normal text-s text-white italic'>1 day ago</p>
                    </div>
                </div>
                <div className='bg-[#151E36] px-7 py-3 my-7 rounded-2xl items-center border-[0.5px] border-[#2c344a]'>
                    <div className='md:flex justify-between'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <p className='font-lato text-2xl text-white font-bold'>Keywords:</p>
                                <p className='font-inter font-normal text-l text-white'>Text-To-Video</p>
                            </div>
                            <p className='font-light text-s text-white font-inter mt-2'>“Title of post or comment”</p>
                            <p className='font-poppins font-normal text-s text-white italic mt-6'>Gunnar</p>
                        </div>
                        
                        <p className='font-poppins font-normal text-s text-white italic'>1 day ago</p>
                    </div>
                </div>
                <div className='bg-[#151E36] px-7 py-3 my-7 rounded-2xl items-center border-[0.5px] border-[#2c344a]'>
                    <div className='md:flex justify-between'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <p className='font-lato text-2xl text-white font-bold'>Keywords:</p>
                                <p className='font-inter font-normal text-l text-white'>Text-To-Video</p>
                            </div>
                            <p className='font-light text-s text-white font-inter mt-2'>“Title of post or comment”</p>
                            <p className='font-poppins font-normal text-s text-white italic mt-6'>Gunnar</p>
                        </div>
                        
                        <p className='font-poppins font-normal text-s text-white italic'>1 day ago</p>
                    </div>
                </div>
                <div className='bg-[#151E36] px-7 py-3 my-7 rounded-2xl items-center border-[0.5px] border-[#2c344a]'>
                    <div className='md:flex justify-between'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <p className='font-lato text-2xl text-white font-bold'>Keywords:</p>
                                <p className='font-inter font-normal text-l text-white'>Text-To-Video</p>
                            </div>
                            <p className='font-light text-s text-white font-inter mt-2'>“Title of post or comment”</p>
                            <p className='font-poppins font-normal text-s text-white italic mt-6'>Gunnar</p>
                        </div>
                        
                        <p className='font-poppins font-normal text-s text-white italic'>1 day ago</p>
                    </div>
                </div>
                
            </div>
        </>
    )
};

export default Replies;
