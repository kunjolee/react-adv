import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

const product = products[0];

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                product={product}
                key={product.id}
                initialValues={{
                    count: 3,
                    maxCount: 10,
                }}
            >
                {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
        </div>
    );
};
export default ShoppingPage;
