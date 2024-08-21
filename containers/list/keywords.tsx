'use client';

import { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/input';
interface IKeywordsProps { }

interface TableData {
    project: string;
    keywords: string;
    mentions: string;
    replies: string;
}

const data: TableData[] = [
    { project: 'Project A', keywords:'text to video', replies: '2', mentions: '10' },
    { project: 'Project B', keywords: 'text to video', replies: '1', mentions: '12' },
];



const Keywords: FC<IKeywordsProps> = (props: any) => {
    const [keywords, setKeywords] = useState("")
    const [mentions, setMentions] = useState("")
    const [replies, setReplies] = useState("")
    return (
        <>
            <div className='max-w-[928px] mx-auto'>
                <p className=' font-lato text-[22px] font-semibold text-white'>Keywords</p>
                <div className='max-w-[626px] mx-auto text-center bg-[#0260c2] pt-[2px] pb-8 mt-10 px-2'>
                    <h3 className='text-yellow-500 font-roboto text-[30px] font-bold mt-4 leading-[40px]'>
                        Want 3 more keywords and 3 more replies each month for
                        <span className='underline'> FREE?</span>
                    </h3>
                    <button className='max-w-[300px] text-[25px] leading-[30px] font-bold bg-yellow-500 text-blue-900 text-center py-2 px-10 rounded-[80px] mt-4'>YES! UNLOCK MY SPECIAL OFFER!</button>
                </div>
                <div className='bg-keywords-gradient w-full text-center py-4 border-[0.5px] border-[#008CFC42] rounded-[10px] mt-8'>
                    <p className='text-white font-lato font-normal text-xl'>You have used up 10 of your 25 keywords this month</p>
                </div>
                <div className="overflow-auto rounded-2xl border-[0.5px] border-[#2c344a] mt-6 font-inter overflow-x-auto no-scrollbar">
                    <table className="w-full rounded-2xl bg-[#151E36] text-white overflow-auto  md:min-w-0 min-w-[700px] no-scrollbar">
                        <thead className='text-xl'>
                            <tr className="">
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 ">PROJECT</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4">KEYWORDS</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4">MENTIONS</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4">REPLIES</th>
                                <th className="border-[#2c344a]">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className="border-t-[0.5px] border-[#2c344a] text-xl font-normal">
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center underline">{row.project}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center">{row.keywords}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center underline">{row.mentions}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center underline">{row.replies}</td>
                                    <td className="border-[#2c344a] py-4 text-center flex gap-2 justify-center">
                                        <Image
                                            src='/icons/edit.svg'
                                            className=''
                                            width={16}
                                            height={19}
                                            alt='Menu icon'
                                        />
                                        <Image
                                            src='/icons/trash.svg'
                                            className=''
                                            width={16}
                                            height={19}
                                            alt='Menu icon'
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr className="border-t-[0.5px] border-[#2c344a] text-xl font-normal ">
                                <td className="border-r-[0.5px] border-[#2c344a] text-center px-2 underline  max-w-[174px]">
                                    <select className='bg-[#232b42] text-white w-full text-center border-none h-10 px-4 rounded'>
                                        {data.map((row, index) => (
                                            <option key={index} value={row.project}>{row.project}</option>
                                        ))}
                                    </select>
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] items-center text-center px-2">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={keywords}
                                        setValue={(val) => setKeywords(val)}
                                        placeholder="Keywords (Max 20 letters)"
                                    />
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] text-center px-2 underline max-w-[146px]">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={mentions}
                                        setValue={(val) => setMentions(val)}
                                        placeholder=""
                                    />
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] text-center px-2 underline max-w-[146px]">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={replies}
                                        setValue={(val) => setReplies(val)}
                                        placeholder=""
                                    />
                                </td>
                                <td className="border-[#2c344a] text-center">
                                    <button className='bg-[#108bf6] font-lato text-[16px] min-w-[219px] max-w-[219px] w-full py-2 rounded-lg text-white font-bold'>Create</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Keywords;
