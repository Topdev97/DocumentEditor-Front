import { FC, useEffect, } from 'react';
import Alert from '../Alert';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface IBotAlert {
    show?: boolean;
    setShow: (show: boolean) => void;
    message: string;
    variant: string;
}

const BotAlert: FC<IBotAlert> = ({ show = false, setShow, message, variant }: any) => {
    const router = useRouter();

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false);
            }, 10000)
        }
    }, [show])

    return (
        <div
            className={clsx(
                'fixed z-[100] md:right-8 right-4 top-5',
                show ? ' block' : 'hidden',
            )}
        >
            <Alert
                label={
                    <span className="flex items-center md:text-base text-s cursor-pointer" onClick={() => setShow(false)}>
                        {message}
                    </span>
                }
                variant={variant}
            />
        </div>
    );
};

export default BotAlert;
