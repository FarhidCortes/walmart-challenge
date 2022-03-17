import React from 'react';

const Product = (props) => {
    //Receive a product from the product list
    const product = props.product;
    //Currency format
    let  formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });
    //Depending on the value of "withDiscount" one component or another is displayed
    const priceWithDescount = () => {
        return (
            <div className='price'>
                <h4>
                    {formatter.format(product.price2)}
                    <p>
                        -50%
                    </p>
                </h4>
                <p className='line-through'>
                    {formatter.format(product.price)}
                </p>
            </div>
        );
    }

    const priceWithoutDescount = () => {
        return (
            <div className='price'>
                <h4>
                    {formatter.format(product.price)}
                </h4>
            </div>
        );
    }
    return (
        <div className='card'>
            <img className='img-product' src={'https://' + product.image} alt="Product" />
            <div className='product-container'>
                <div className='price'>
                    {product.withDiscount ? priceWithDescount() : priceWithoutDescount()}
                </div>
                <div className='btn-addproduct'>
                    <h5 className='brand'>
                        {product.brand}
                    </h5>
                    <p className='product-description'>
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;