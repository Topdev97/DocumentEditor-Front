import { FC, ReactNode } from 'react';

interface IPublicLayoutProps {
    children: ReactNode;
}

export const PublicLayout: FC<IPublicLayoutProps> = ({ children }) => {
    return (
        <div className='page-wrapper'>
            <main>{children}</main>
        </div>
    );
};
