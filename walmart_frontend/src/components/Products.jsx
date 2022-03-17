import React from 'react';
import Product from './Product';

const Products = (props) => {
    //displays a list of the "Product" component
    const items = props.products.map((product) => 
        <Product
            key={product.id}
            product={product}
        />
    );
    
    return ( 
        <div className='products-flex'>
            {items}
        </div>
     );
}
 
export default Products;