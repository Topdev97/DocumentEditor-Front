'use client';

import * as React from 'react';
import { PublicLayout } from '@/components/layouts/PublicLayout';
import { withRestricted } from '@/HOC/withRestricted';
interface IAuthPageLayoutProps {
    children: React.ReactNode;
}

const AuthPageLayout: React.FC<IAuthPageLayoutProps> = (props) => {
    return (
        <PublicLayout>
            {props.children}
        </PublicLayout>
    );
};

export default withRestricted(AuthPageLayout);

