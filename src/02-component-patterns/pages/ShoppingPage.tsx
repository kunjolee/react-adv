import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                product={product}
                className='bg-dark text-white'
                key={product.id}
                initialValues={{
                    count: 3,
                    maxCount: 10,
                }}
            >
                {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
                    <>
                        <ProductImage className='custom-image' />
                        <ProductTitle className='text-bold' />
                        <ProductButtons className='custom-buttons' />
                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}> -2</button>
                        {!isMaxCountReached && (
                            <button onClick={() => increaseBy(2)}>+2 sumar</button>
                        )}
                        <span>
                            {count} - {maxCount}
                        </span>
                    </>
                )}
            </ProductCard>
        </div>
    );
};
export default ShoppingPage;
