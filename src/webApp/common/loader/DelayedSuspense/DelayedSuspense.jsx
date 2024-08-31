// import React, { useEffect, useState } from 'react';
// import Loader from '..';

// const DelayedSuspense = ({ children, delay = 2000 }) => {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => setIsLoaded(true), delay);
//         return () => clearTimeout(timer);
//     }, [delay]);

//     return isLoaded ? children : <Loader />;
// };

// export default DelayedSuspense;


// import React, { useEffect, useState } from 'react';
// import Loader from '..';

// const DelayedSuspense = ({ children, delay = 2000 }) => {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             await new Promise(resolve => setTimeout(resolve, delay));
//             setIsLoaded(true);
//         };

//         fetchData();

//         // Clean-up function if needed
//         return () => { };
//     }, [delay]);

//     return isLoaded ? children : <Loader />;
// };

// export default DelayedSuspense;


import React, { useState } from 'react';
import Loader from '..';

const DelayedSuspense = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoad = () => {
        setIsLoaded(true);
    };
    if (!isLoaded) {
        setTimeout(handleLoad, 2000);
    }

    return isLoaded ? children : <Loader />;
};

export default DelayedSuspense;


