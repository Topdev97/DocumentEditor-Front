import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';

interface IProtectedLayoutProps {
    children: ReactNode;
}

export const ProtectedLayout: FC<IProtectedLayoutProps> = ({ children }) => {
    return (
        <div className='relative flex flex-col h-screen lg:overflow-hidden lg:flex-row'>
            <Sidebar />
            <div className='flex w-full'>
                <main className='w-full overflow-y-auto overflow-hidden no-scrollbar xl:px-22 px-4 xl:py-22 py-15'>
                    {children}
                </main>
            </div>
        </div>
    );
};
