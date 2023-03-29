import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {products.map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            className='bg-dark text-white'
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count ?? 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    );
                })}
            </div>
            <div className='shopping-cart'>
                {Object.values(shoppingCart).map((product) => (
                    <ProductCard
                        product={product}
                        className='bg-dark text-white'
                        style={{ width: '100px' }}
                        key={product.id}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage className='custom-image' />
                        <ProductTitle title={`${product.count}`} />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
export default ShoppingPage;
