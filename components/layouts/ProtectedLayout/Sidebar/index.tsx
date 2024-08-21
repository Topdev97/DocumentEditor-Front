'use client';
import CloseButtonMobile from '@/components/CloseButtonMobile';
import LoadingIndicator from '@/components/LoadingIndicator';
import clsx from 'clsx';
import { PATH } from '@/constants';
// import { useAuth } from '@/contexts';
import { logout } from '@/services';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthProvider'
import Menu from '../Menu';

interface ISidebarProps {
    onCloseSidebar?: () => void;
}

const Sidebar: FC<ISidebarProps> = (props) => {
    const { onCloseSidebar } = props;
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [menuTrigger, setMenuTrigger] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const { user } = useAuth();
    const menuRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);


    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await logout();
            router.push(PATH.LOGIN); 
        } catch (error) {
            console.error('Logout failed', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTrigger = () => {
        setMenuTrigger(!menuTrigger);
    };

    const handleCollapse  = () => {
        setCollapse(!collapse);
    };

    const handleLinkClick = () => {
        setCollapse(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setCollapse(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuTrigger(false);
            }
        };

        if (menuTrigger) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuTrigger]);

    useEffect(() => {
        const handleSidebarClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setCollapse(false);
            }
        };

        if (collapse) {
            document.addEventListener('mousedown', handleSidebarClickOutside);
        } else {
            document.removeEventListener('mousedown', handleSidebarClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleSidebarClickOutside);
        };
    }, [collapse]);

    return (
        <>
            <LoadingIndicator isLoading={isLoading} />
            <aside className='h-screen bg-[#151E36] z-20 min-w-[326px] pl-5 pr-3 hidden lg:flex border-r-[0.5px] border-[#2c344a]'>
                <div className='h-full flex flex-col justify-between relative'>
                    <div className='flex-1 relative'>
                        <div className={clsx('pt-5')}>
                            <Menu {...props} />
                        </div>
                        <div className='bottom-0 absolute w-full border-t-[0.5px] py-5 border-[#D2C4EB] flex justify-between'>
                            <div className='flex gap-1 items-center hover:cursor-pointer' onClick={handleTrigger}>
                                {user ? (
                                    <Image
                                    src='/imgs/avatar.svg'
                                    className='rounded-[50%]'
                                    width={24}
                                    height={24}
                                    alt='Menu icon'
                                    
                                />
                                ) : (
                                    <Image
                                        src='/imgs/avatar.svg'
                                        className='rounded-[50%]'
                                        width={23}
                                        height={23}
                                        alt='Menu icon'
                                    />
                                )}
                                <div className='max-w-[20px]'>
                                    <p className='font-medium font-lato text-lg text-white'>
                                        {user ? user.email : 'User Name'}  {/* Use user.name if you have user context */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {menuTrigger && (
                            <div
                                className='absolute bottom-24 w-full rounded-md bg-white shadow-lg z-10'
                                ref={menuRef}
                            >
                                <Link
                                    className='flex items-center cursor-pointer border-[#D2C4EB] pl-10 gap-3 hover:bg-gray-500 hover:rounded-t-md py-4'
                                    href="/profile"
                                    onClick={handleLinkClick}
                                >
                                    <Image
                                        src="/imgs/avatar.png"
                                        width={24}
                                        height={24}
                                        alt='Menu icon'
                                    />
                                    <p className='font-medium cursor-pointer text-sm text-gray-600'>View Profile</p>
                                </Link>
                                <button
                                    className='flex items-center cursor-pointer w-full border-[#D2C4EB] pl-10 gap-3 text-gray-600 hover:bg-gray-500 hover:rounded-b-md py-4'
                                    onClick={handleLogout}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <p className='font-medium cursor-pointer text-sm text-gray-600'>Log Out</p>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
            <aside className='w-full bg-[#151E36] z-20 px-10 lg:hidden flex py-5 justify-between border-b-[0.5px] border-[#2c344a]'>
                <Link
                    className='flex items-center cursor-pointer pl-4'
                    href='/dashboard'
                    onClick={handleLinkClick}
                >
                    <Image
                        src='/imgs/brand.png'
                        width={166}
                        height={42}
                        alt='Menu icon'
                    />
                </Link>
                <Image
                    src='/icons/lists_svg.svg'
                    width={24}
                    height={24}
                    alt='Menu icon'
                    onClick={handleCollapse}
                />
            </aside>
            {collapse && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                    onClick={() => setCollapse(false)}
                ></div>
            )}
            <aside ref={sidebarRef} className={clsx('h-screen bg-[#151E36] z-20 min-w-[326px] max-w-[326px] fixed inset-0 transition-all duration-300 ease-linear pl-10 pr-5', collapse ? 'translate-x-0' : '-translate-x-full')}>
                <div className='h-full flex flex-col justify-between relative'>
                    <div className='flex-1 relative'>
                        <div className={clsx('pt-5')}>
                            <Menu {...props} onCloseSidebar={handleLinkClick} />
                        </div>
                        <div className='bottom-0 absolute w-full border-t-[0.5px] py-5 border-[#D2C4EB] flex justify-between'>
                            <div className='flex gap-4 items-center'>
                                {user ? (
                                    <Image
                                        src='/imgs/avatar.svg'
                                        className='rounded-[50%]'
                                        width={48}
                                        height={48}
                                        alt='Menu icon'
                                    />
                                ) : (
                                    <Image
                                        src='/imgs/avatar.svg'
                                        className='rounded-[50%]'
                                        width={48}
                                        height={48}
                                        alt='Menu icon'
                                    />
                                )}
                                <p className='font-medium font-lato text-2xl text-white'>
                                    {user ? user.email : 'User Name'}  {/* Use user.name if you have user context */}
                                </p>
                            </div>
                            <Image
                                src='/icons/dots.svg'
                                className='hover:cursor-pointer'
                                width={22}
                                height={4}
                                alt='Menu icon'
                                onClick={handleTrigger}
                            />
                        </div>
                            <div
                                className='absolute bottom-24 w-full rounded-md bg-white shadow-lg z-10'
                                ref={menuRef}
                            >
                                <Link
                                    className='flex items-center cursor-pointer border-[#D2C4EB] pl-10 gap-3 hover:bg-gray-500 hover:rounded-t-md py-4'
                                    href="/profile"
                                    onClick={handleLinkClick}
                                >
                                    <Image
                                        src="/imgs/avatar.png"
                                        width={24}
                                        height={24}
                                        alt='Menu icon'
                                    />
                                    <p className='font-medium cursor-pointer text-sm text-gray-600'>View Profile</p>
                                </Link>
                                <button
                                    className='flex items-center cursor-pointer w-full border-[#D2C4EB] pl-10 gap-3 text-gray-600 hover:bg-gray-500 hover:rounded-b-md py-4'
                                    onClick={handleLogout}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <p className='font-medium cursor-pointer text-sm text-gray-600' onClick={() => handleLogout()}>Log Out</p>
                                </button>
                            </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
