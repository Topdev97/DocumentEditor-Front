import clsx from 'clsx';
import * as React from 'react';
import Portal from '../PagePortal';
import Spinner from '../Spinner';

interface ILoadingIndicatorProps extends React.HTMLProps<HTMLDivElement> {
    isLoading?: boolean;
}

const LoadingIndicator: React.FunctionComponent<ILoadingIndicatorProps> = (props) => {
    const { isLoading } = props;
    if (typeof isLoading === 'boolean' && !isLoading) return null;

    return (
        <Portal>
            <div
                {...props}
                role="status"
                className={clsx(
                    'fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-20 z-50',
                    props.className,
                )}
            >
                <Spinner />
                <span className="sr-only">Loading...</span>
            </div>
        </Portal>
    );
};

export default LoadingIndicator;
