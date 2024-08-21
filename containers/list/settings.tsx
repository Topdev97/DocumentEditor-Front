'use client';

import { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/atoms/input';
import ToggleSwitch from '@/components/ToggleSwitch';
import RoundRadioSelect from '@/components/RoundRadioSelect';
interface ISettingsProps { }

interface FacebookTableData {
    facebook: string;
    url: string;
    replies: string;
}

const facebookData: FacebookTableData[] = [
    { facebook: 'Facebook1', url: 'https://facebook.com/', replies: '2' },
    { facebook: 'Facebook2', url: 'https://facebook.com/', replies: '3' },
];

interface YoutubeTableData {
    youtube: string;
    url: string;
    replies: string;
}

const youtubeData: YoutubeTableData[] = [
    { youtube: 'youtube', url: 'https://youtube.com/', replies: '2' },
    { youtube: 'youtube', url: 'https://youtube.com/', replies: '3' },
];



const Settings: FC<ISettingsProps> = (props: any) => {
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [autoReplies, setAutoReplies] = useState("");
    const [selectedOption, setSelectedOption] = useState('Only Name');
    const [facebookGroup, setFacebookGroup] = useState('');
    const [facebookUrl, setFacebookUrl] = useState('');
    const [facebookReplies, setFacebookReplies] = useState('');
    const [youtubeGroup, setYoutubeGroup] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [youtubeReplies, setYoutubeReplies] = useState('');

    const handleRadioChange = (value: string) => {
        setSelectedOption(value);
    };


    return (
        <>
        <div className='max-w-[950px] mx-auto'>
            <div className='flex justify-between items-center w-full min-w-[150px]'>
                <p className=' font-lato text-[22px] font-semibold text-white'>Settings</p>
            </div>
            <div className='xl:flex justify-between mt-20'>
                <div className=''>
                    <p className='font-inter text-l font-medium text-[#FCFDFF]'>Reply Settings</p>
                    <p className='font-inter text-[13px] font-normal text-[#ADB5BD] whitespace-nowrap'>Secondary information</p>
                </div>
                <div>
                    <div className=' bg-[#151E36] shadow-sm rounded-[8px] border-[0.5px] border-[#2c344a] xl:mt-0 mt-5'>
                        <div className='flex justify-between xl:gap-[169px] lg:gap-[120px] gap-4 px-[10px] py-[14px]'>
                            <div className='max-w-[436px]'>
                                <p className='font-inter font-normal text-[14px] text-white'>Auto Reply</p>
                                <p className='font-inter font-normal text-[13px] leading-[16px] text-[#868E96]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div>
                                <ToggleSwitch />
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#151E36] shadow-sm rounded-[8px] border-[0.5px] border-[#2c344a] flex justify-between mt-5 px-2 items-center pb-2'>
                        <p className='font-inter font-normal md:text-[14px] text-[12px] text-white'>Daily Limit of Auto Replies : </p>
                        <Input
                            name="autoReplies"
                            className="text-center rounded border-none"
                            type="input"
                            value={autoReplies}
                            setValue={(val) => setAutoReplies(val)}
                            placeholder=""
                        />
                    </div>
                    <div className=' bg-[#151E36] shadow-sm rounded-[8px] border-[0.5px] border-[#2c344a] mt-5 pl-4 pr-15 items-center py-4 overflow-auto no-scrollbar'>
                        <p className='font-inter font-normal text-[14px] text-white'>Post Replies to the following :  </p>
                        <div className='flex justify-between mt-4 gap-3'>
                            <div className='flex md:gap-3 gap-1'>
                                <ToggleSwitch />
                                <p className='font-inter font-normal text-white text-[14px]'>REDDIT</p>
                            </div>
                            <div className='flex md:gap-3 gap-1'>
                                <ToggleSwitch />
                                <p className='font-inter font-normal text-white text-[14px]'>TWITTER</p>
                            </div>
                            <div className='flex md:gap-3 gap-1'>
                                <ToggleSwitch />
                                <p className='font-inter font-normal text-white text-[14px]'>FACEBOOK</p>
                            </div>
                            <div className='flex md:gap-3 gap-1'>
                                <ToggleSwitch />
                                <p className='font-inter font-normal text-white text-[14px]'>YOUTUBE</p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#151E36] shadow-sm rounded-[8px] border-[0.5px] border-[#2c344a] mt-5 pl-4 pr-15 items-center py-4 overflow-auto no-scrollbar'>
                        <p className='font-inter font-normal text-[14px] text-white'>Post Replies to the following :  </p>
                        <div className='flex justify-between mt-4'>
                            <RoundRadioSelect
                                className='flex text-white gap-10 font-inter text-[12px] font-normal whitespace-nowrap'
                                options={['Only Name', 'Name and URL', 'URL Only']}
                                selectedOption={selectedOption}
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:flex justify-between mt-20'>
                <div className=''>
                    <p className='font-inter text-l font-medium text-[#FCFDFF]'>Facebook Group Settings</p>
                    <p className='font-inter text-[13px] font-normal text-[#ADB5BD]'>Secondary information</p>
                </div>
                <div className="overflow-x-auto rounded-2xl border-[0.5px] border-[#2c344a] font-inter xl:max-w-[671px] xl:mt-0 mt-5 no-scrollbar">
                    <table className="w-full rounded-2xl bg-[#151E36] text-white">
                        <thead className='text-l font-inter font-normal'>
                            <tr className="">
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 max-w-[149px] min-w-[149px]">FACEBOOK GROUP</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 max-w-[166px] min-w-[166px]">URL</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 max-w-[187px] min-w-[187px]">Replies</th>
                                <th className="border-[#2c344a] px-8">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facebookData.map((row, index) => (
                                <tr key={index} className="border-t-[0.5px] border-[#2c344a] text-s font-normal font-inter">
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center underline">{row.facebook}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center">{row.url}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center">{row.replies}</td>
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
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={facebookGroup}
                                        setValue={(val) => setFacebookGroup(val)}
                                        placeholder=""
                                    />
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] items-center text-center px-2 max-w-[234px]">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={facebookUrl}
                                        setValue={(val) => setFacebookUrl(val)}
                                        placeholder="URL"
                                    />
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] items-center text-center px-2 max-w-[234px]">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={facebookReplies}
                                        setValue={(val) => setFacebookReplies(val)}
                                        placeholder=""
                                    />
                                </td>
                                <td className="border-[#2c344a] text-center px-2">
                                    <button className='bg-[#108bf6] font-inter text-[16px] w-full py-2 rounded-lg text-white font-bold'>Create</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='xl:flex justify-between mt-10'>
                <div className=''>
                    <p className='font-inter text-l font-medium text-[#FCFDFF]'>YouTube Comment Settings</p>
                    <p className='font-inter text-[13px] font-normal text-[#ADB5BD]'>Secondary information</p>
                </div>
                <div className="overflow-x-auto rounded-2xl border-[0.5px] border-[#2c344a] font-inter xl:max-w-[671px] xl:mt-0 mt-5 no-scrollbar">
                    <table className="w-full rounded-2xl bg-[#151E36] text-white">
                        <thead className='text-l font-inter font-normal'>
                            <tr className="">
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 max-w-[149px] min-w-[149px]">YouTube Videos</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 max-w-[166px] min-w-[166px]">URL</th>
                                <th className="border-r-[0.5px] border-[#2c344a] py-4 max-w-[187px] min-w-[187px]">Replies</th>
                                <th className="border-[#2c344a] px-8">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {youtubeData.map((row, index) => (
                                <tr key={index} className="border-t-[0.5px] border-[#2c344a] text-s font-normal font-inter">
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center underline">{row.youtube}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center">{row.url}</td>
                                    <td className="border-r-[0.5px] border-[#2c344a] py-4 text-center">{row.replies}</td>
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
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={facebookGroup}
                                        setValue={(val) => setYoutubeGroup(val)}
                                        placeholder=""
                                    />
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] items-center text-center px-2 max-w-[234px]">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={facebookUrl}
                                        setValue={(val) => setYoutubeUrl(val)}
                                        placeholder="URL"
                                    />
                                </td>
                                <td className="border-r-[0.5px] border-[#2c344a] items-center text-center px-2 max-w-[234px]">
                                    <Input
                                        name="keywords"
                                        className="bg-[#232b42] text-center rounded border-none mb-2"
                                        type="input"
                                        value={facebookReplies}
                                        setValue={(val) => setYoutubeReplies(val)}
                                        placeholder=""
                                    />
                                </td>
                                <td className="border-[#2c344a] text-center px-2">
                                    <button className='bg-[#108bf6] font-inter text-[16px] w-full py-2 rounded-lg text-white font-bold'>Create</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Settings;
