'use client';

import { IMenuItem } from '@/types/nav';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { v4 as uuidV4 } from "uuid"
interface IMenuItemProps {
    menuItem: IMenuItem;
    onCloseSidebar?: () => void;
}

const MenuItem: FC<IMenuItemProps> = ({ menuItem, onCloseSidebar }) => {
    const pathName = usePathname();
    const childrenHref = menuItem?.children?.map((it) => it.href);
    const isActive = pathName.includes(menuItem.href) || childrenHref?.includes(pathName);

    const handleClickNavItem = () => {
        onCloseSidebar && onCloseSidebar();
    };

    return (
        <>
            <div className='flex text-center border-b-[0.5px] border-white'>
                <Link
                    className='flex items-center cursor-pointer text-center'
                    href={menuItem.href}
                    onClick={handleClickNavItem}
                >
                    <h3 className='text-white text-[22px] font-semibold font-lato mx-auto text-center'>DOCUMENT EDITOR</h3>
                </Link>
            </div>
            {menuItem?.children !== undefined && isActive && (
                <div className='flex flex-col gap-4 pt-8'>
                    {menuItem?.children?.map((item: IMenuItem, index: number) => {
                        return (
                            <Link
                                key={index}
                                className={clsx(
                                    'flex items-center cursor-pointer p-3 rounded-md hover:bg-[#123d6a]', 
                                    pathName.includes(item.href) ? 'bg-[#123d6a] rounded-8 border-[0.5px] border-[#008CFC4D]': ''
                                )}
                                href={`/dashboard/${uuidV4()}`}
                                onClick={handleClickNavItem}
                            >
                                <Image
                                    src={pathName.includes(item.href) ? item.activeIcon : item.icon}
                                    width={24}
                                    height={24}
                                    alt='Menu icon'
                                />
                                <p
                                    className={clsx(
                                        'text-2xl ml-3 text-white font-lato font-medium',
                                    )}
                                >
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default MenuItem;
