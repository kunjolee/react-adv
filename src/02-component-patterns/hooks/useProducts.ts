
import { useState } from 'react';

export const useProducts = () => {
        
    const [ counter, setCounter ] = useState(0);

    const handleClick = ( value: number ) => {
        setCounter( ( prevValue ) => Math.max( prevValue + value, 0 ) )
    }


    return { 
        counter,
        handleClick
    }

}
