import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components"

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>

          <ProductCard product={ product } >
            <ProductCard.Image/>
            <ProductCard.Title title='Hey nems' />
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={ product } >
            <ProductCard.Image/>
            <ProductCard.Title title='Weird properties' />
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={ product } >
            <ProductImage/>
            <ProductTitle title='El MUNDOOO' />
            <ProductButtons />
          </ProductCard>

          <ProductCard product={ product } >
            <ProductImage/>
            <ProductTitle title='Property called title' />
            <ProductButtons />
          </ProductCard>

          <ProductCard product={ product } >
            <ProductImage/>
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}
export default ShoppingPage