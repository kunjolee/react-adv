import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export interface shoppingCartState {
    [key: string]: ProductInCart;
}

export interface onProductCountChangeProps {
    product: Product;
    count: number;
}

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<shoppingCartState>({});

    const onProductCountChange = ({ product, count }: onProductCountChangeProps) => {
        setShoppingCart((oldShoppingCart) => {
            if (count === 0) {
                const { [product.id]: ToDelete, ...rest } = oldShoppingCart;
                return rest;
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
