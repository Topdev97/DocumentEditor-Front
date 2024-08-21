'use client';

import { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/input';
interface IMentionsProps { }
interface SelectData {
    keywords: string;
}

const keywordsData: SelectData[] = [
    { keywords: 'keyword A' },
    { keywords: 'Keyword B' },
];


const Mentions: FC<IMentionsProps> = (props: any) => {
    const [checkboxValue, setCheckboxValue] = useState(false);

    return (
        <>
        <div className='max-w-[928px] mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <p className=' font-lato text-[22px] font-semibold text-white'>Mentions</p>
            </div>
            
            <div className='bg-[#151E36] px-7 py-4 mt-4 rounded-2xl flex items-center justify-between border-[0.5px] border-[#2c344a] whitespace-nowrap md:whitespace-normal overflow-auto md:gap-8 gap-5 no-scrollbar'>
                <select className='bg-[#232b42] text-white py-2 h-10 px-4 rounded'>
                    {keywordsData.map((row, index) => (
                        <option key={index} value={row.keywords}>{row.keywords}</option>
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
            <div className='bg-[#151E36] rounded-2xl grid grid-cols-10 items-center justify-between border-[0.5px] border-[#2c344a] mt-6'>
                <div className='col-span-6 p-4 border-r-[#2c344a] border-r-[0.5px]'>
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
                <div className='col-span-4 text-center items-center px-4'>
                    <button className='bg-[#108bf6] font-lato px-5 max-w-[219px] w-full py-2 rounded-md text-white font-medium md:text-[14px] text-[12px]'>Generate Reply</button>
                </div>
            </div>
            <div className='bg-[#151E36] rounded-2xl grid grid-cols-10 justify-between border-[0.5px] border-[#2c344a] mt-6'>
                <div className='col-span-6 p-4 border-r-[#2c344a] border-r-[0.5px]'>
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
                <div className='col-span-4 px-4'>
                    <p className='font-light text-s text-white font-inter mt-7'>“AI generated Reply message here”</p>
                    <div className='flex justify-end mt-10 md:gap-3 gap-1'>
                        <Image
                            src='/icons/copy.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                        <Image
                            src='/icons/upload.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                        <Image
                            src='/icons/edit.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                        <Image
                            src='/icons/repeat.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                        <Image
                            src='/icons/trash.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                    </div>
                </div>
            </div>
            <div className='bg-[#151E36] rounded-2xl grid grid-cols-10 justify-between border-[0.5px] border-[#2c344a] mt-6'>
                <div className='col-span-6 p-4 border-r-[#2c344a] border-r-[0.5px]'>
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
                <div className='col-span-4 px-2 mt-2'>
                    <div className='bg-[#232b42] p-2 rounded-lg'>
                        <p className='font-light text-s text-white font-inter'>“AI generated Reply message here”</p>
                        <br></br>
                    </div>
                    <div className='flex justify-end mt-5 gap-1 px-2'>
                        <Image
                            src='/icons/save.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                        <Image
                            src='/icons/cancel.svg'
                            className=''
                            width={24}
                            height={24}
                            alt='Menu icon'
                        />
                       
                    </div>
                </div>
            </div>
            
            <div className='bg-[#151E36] rounded-2xl grid grid-cols-10 items-center justify-between border-[0.5px] border-[#2c344a] mt-6'>
                <div className='col-span-6 p-4 border-r-[#2c344a] border-r-[0.5px]'>
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
                <div className='col-span-4 text-center items-center px-4'>
                    <button className='bg-[#108bf6] font-lato px-5 max-w-[219px] w-full py-2 rounded-md text-white font-medium md:text-[14px] text-[12px]'>Generate Reply</button>
                </div>
            </div>
            <div className='bg-[#151E36] rounded-2xl grid grid-cols-10 items-center justify-between border-[0.5px] border-[#2c344a] mt-6'>
                <div className='col-span-6 p-4 border-r-[#2c344a] border-r-[0.5px]'>
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
                <div className='col-span-4 text-center items-center px-4'>
                    <button className='bg-[#108bf6] font-lato px-5 max-w-[219px] w-full py-2 rounded-md text-white font-medium md:text-[14px] text-[12px]'>Generate Reply</button>
                </div>
            </div>
          
        </div>
        </>
    )
};

export default Mentions;
