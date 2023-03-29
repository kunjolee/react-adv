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
            const initalProduct = { count: 0, ...product };
            const productInCart: ProductInCart = oldShoppingCart[product.id] ?? initalProduct;

            // suma el contador de productos - Mayor que 0
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;

                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }
            // eliminar el producto del carrito de compra si el contador es menor o igual que 0
            const { [product.id]: ToDelete, ...rest } = oldShoppingCart;
            return { ...rest };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};

// setShoppingCart((oldShoppingCart) => {
//   if (count === 0) {
//     const { [product.id]: ToDelete, ...rest } = oldShoppingCart
//     return rest
//   }

//   return {
//     ...oldShoppingCart,
//     [product.id]: { ...product, count }
//   }
// })
