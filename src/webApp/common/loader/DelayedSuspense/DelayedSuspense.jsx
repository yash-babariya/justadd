import React, { useEffect, useState } from 'react';
import Loader from '..';

const DelayedSuspense = ({ children, delay = 2000 }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <React.Suspense fallback={<Loader />}>
            {show ? children : <Loader />}
        </React.Suspense>
    );
};

export default DelayedSuspense;
