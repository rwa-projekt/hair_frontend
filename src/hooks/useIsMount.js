import { useRef, useEffect } from 'react';

export default function useIsMount() {

    // Ref
    const isMountRef = useRef(true);

    // UseEffect
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    
    return isMountRef.current;
};