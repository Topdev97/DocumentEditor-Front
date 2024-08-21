'use client';

import * as React from 'react';

interface IAuthPageLayoutProps {
    children: React.ReactNode;
}

const AuthPageLayout: React.FC<IAuthPageLayoutProps> = (props) => {
    return (
        <section>
            {props.children}
        </section>
    );
};

export default AuthPageLayout;
