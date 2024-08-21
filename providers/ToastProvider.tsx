import * as React from 'react';
import { ToastContainer } from 'react-toastify';

interface IToastProviderProps {
    children: React.ReactNode;
}

const ToastProvider: React.FunctionComponent<IToastProviderProps> = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer
                position="top-right"
                hideProgressBar
                autoClose={5000}
                closeOnClick
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    );
};

export default ToastProvider;
