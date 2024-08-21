"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import logoImage from "@/public/imgs/logo.png";
import ProfileMenu from "./profile-menu";
import { getLocalStorageWithoutParsing } from '@/services/local-storage';
import defaultAvatar from '@/public/imgs/avatar.png';


const Header = () => {
    const access_token = getLocalStorageWithoutParsing('accessToken');
    const [menuShow, setMenuShow] = useState<boolean>(false);
    const session = useSession();
    const [isClient, setIsClient] = useState(false);
    console.log(session, 'session.data')
    useEffect(() => {
        setIsClient(true);
        
    }, []);

    if (!isClient) return null;
    return (
        <header className="z-[99] top-5 max-w-7xl mx-auto w-full font-sans py-[14px] md:py-[58px] z-1 relative">
            <div className="py-[5px]">
                <div className="flex justify-between px-[16px] py-2">
                    <div className="flex justify-start items-center gap-5">
                        <Link href="/"
                            className="flex justify-start items-center group cursor-pointer">
                            <Image src={logoImage} className="w-[200px] h-[40px]" height={150} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        {access_token && access_token != "undefined" && access_token != 'null' ? (
                            <div className="relative">
                                <Image className="cursor-pointer" src={defaultAvatar} width={40} height={40} alt='image' onClick={() => setMenuShow(true)} />
                                <ProfileMenu menuShow={menuShow} setMenuShow={(val) => setMenuShow(val)} />
                            </div>
                        ) : session.data?.user?.name ? (
                            <div className="relative">
                                <Image className="rounded-full cursor-pointer" src={session.data?.user.image} width={50} height={50} alt={session.data?.user.image} onClick={() => setMenuShow(true)} />
                                <ProfileMenu menuShow={menuShow} setMenuShow={(val) => setMenuShow(val)} />
                            </div>
                        ) : (
                            <div className="flex justify-end items-center gap-3">
                                <Link href="/sign-in" className="text-custom-black-text text-lg py-[10px] px-4 font-semibold hidden sm:block">Log in</Link>
                                <Link href="/sign-up" className="bg-custom-pink text-white rounded-lg text-lg py-[10px] px-4 font-semibold">Sign up</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header;


