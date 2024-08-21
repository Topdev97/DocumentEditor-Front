'use client';

import { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/input';
interface IOffersProps { }


const Offers: FC<IOffersProps> = (props: any) => {

    const [secretCode, setSecretCode] = useState('')
    return (
        <>
            <div className='max-w-[950px] mx-auto'>
                <div className='flex justify-between items-center w-full min-w-[150px] md:text-left text-center'>
                    <p className=' font-lato text-[22px] font-semibold text-white md:mx-0 mx-auto'>Special Offers</p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 justify-between mt-6 xl:gap-[145px] lg:gap-[20px] gap-10'>
                    <button className='bg-[#008CFC] text-l text-center font-inter font-semibold text-white py-3 rounded-[4px] min-w-[219px] max-w-[219px] mx-auto'>REPLY GENIE OFFER</button>
                    <button className='bg-[#008CFC] text-l text-center font-inter font-semibold text-white py-3 rounded-[4px] min-w-[219px] max-w-[219px] mx-auto'>CLIP GENIE OFFER</button>
                    <button className='bg-[#008CFC] text-l text-center font-inter font-semibold text-white py-3 rounded-[4px] min-w-[219px] max-w-[219px] mx-auto'>PIXEL GENIE OFFER</button>
                </div>
                <div className='md:flex justify-between mt-7'>
                    <div className='md:mx-0 mx-auto'>
                        <p className='font-inter text-[18px] font-semibold text-[#D9FF00]'>Unlock 3 extra keywords and 3 extra replies each month!</p>
                        <div className='max-w-[576px] mt-2'>
                            <p className='font-inter font-normal text-[14px] text-white'>Get the ability to track 3 additional keywords and reply to 3 additional mentions each month inside of Reply Genie by doing a few simple tasks.</p>
                        </div>
                        <p className='font-inter font-semibold text-[18px] text-white xl:mt-10 mt-5'>How to unlock extra keywords and replies :</p>
                        <div className="max-w-[548px] text-white font-inter font-normal text-[14px] leading-4 pl-4 xl:mt-5 mt-2">
                            <ol className="list-decimal">
                                <li className="mb-4">Do each of these things on the right.</li>
                                <li className="mb-4">
                                The last task contains your secret code to unlock your extra keywords and replies, but it will remain locked until you complete all the other tasks.
                                </li>
                                <li className="mb-4">
                                Once all the tasks are complete, click the last task to reveal your secret code.
                                </li>
                                <li className="mb-4">
                                Enter the secret code below to get 3 extra keywords and replies each month!
                                </li>
                            </ol>
                        </div>

                        <div className='flex gap-[15px] items-center md:justify-start justify-center md:mb-0 mb-5'>
                            <Input
                                name="secret-code"
                                className="rounded border-none mb-2 min-w-[200px]"
                                type="input"
                                value={secretCode}
                                setValue={(val) => setSecretCode(val)}
                                placeholder=""
                            />
                            <button className='bg-[#D9FF00] min-w-[115px] py-[10px] text-[#131313] font-inter text-[14px] rounded-md font-semibold items-center'>Unlock</button>
                        </div>
                    </div>
                    <div className=''>
                        <Image
                            src='/imgs/special_offer.png'
                            className='md:mx-0 mx-auto text-center min-w-[331px]'
                            width={331}
                            height={459}
                            alt='Menu icon'
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Offers;
