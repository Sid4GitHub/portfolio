import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        // Check on initial load
        checkIsMobile();

        // Add event listener for resizing
        window.addEventListener('resize', checkIsMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return isMobile;
};

export default useIsMobile;
