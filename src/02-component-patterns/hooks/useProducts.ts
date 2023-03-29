import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProducts = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(0);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            // si esta siendo controlado va a enviar +1 o -1 respectivamente, y el producto
            return onChange!({ count: value, product });
        }

        //si no esta siendo controlado el componente, hacer la suma normal
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    };
};
