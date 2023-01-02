import { createContext } from 'react';

import { useProducts } from '../hooks/useProducts';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, handleClick } = useProducts();
    
    return (
        <Provider value={{
            counter,
            handleClick,
            product
        }}>
            <div className={ styles.productCard }>
                { children } 
            </div>
        </Provider>
    )
}

