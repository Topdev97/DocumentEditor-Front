"use client"

import Image from "next/image";
import Header from "../../templates/header";
import heroImage from "@/public/imgs/hero.jpg";

const HomeMainVisual = () => {
    return (
        <div className="w-full mx-auto relative top-background-image" style={{ backgroundImage: `url('../../imgs/top-background.png')` }}>
            <Header />
            <div className="py-[64px] md:py-[100px] lg:py-[140px] flex justify-between items-center z-1 relative flex-col md:flex-row max-w-7xl mx-auto px-[16px] gap-20">
                <div>
                    <h1 className="text-white text-3xl md:text-[30px] lg:text-[60px] lg:leading-[72px] font-medium ">
                        Find your Dream <br /> Job Faster
                    </h1>
                    <p className="mt-4 md:mt-6  text-custom-black-text text-lg md:text-xl">
                        — Effortlessly filter through hundreds of listings and unlock exclusive perks with premium access
                    </p>
                    <div className="mt-8 md:mt-10">
                        <button className="bg-custom-pink text-white rounded-lg text-lg py-[10px] px-4 font-semibold w-full sm:w-auto" onClick={() => { window.location.href = 'https://buy.stripe.com/5kA4h1bmw8TXguc7ss' }}>Start Job Hunting</button>
                    </div>
                </div>
                <div className="">
                    <Image className="rounded-lg" src={heroImage} width={568} height={568} alt="HERO" />
                </div>
            </div>
        </div>
    )
}

export default HomeMainVisual;