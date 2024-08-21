import Image from "next/image"
import logoImage from '@/public/imgs/logo.png';

const Loading = () => {
    return (
        <div className="absolute top-0 left-0 z-[9999] flex justify-center items-center bg-[rgba(15,15,15,0.36)] w-full h-full">
            <div className='relative w-[110px] h-[110px] -mt-[200px]'>
                <Image
                    className='w-full h-full animate-spin'
                    src={logoImage}
                    width={150}
                    height={150}
                    alt='Loading...'
                />
            </div>
        </div>
    )
}

export default Loading;