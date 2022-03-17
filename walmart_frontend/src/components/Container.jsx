import React, { useContext } from 'react';
import Products from './Products';
import ProductContext from '../context/ProductsProvider';
import Footer from './Footer';

//Component where the products displayed by the search
const Container = () => {
    // products and quantityProducts are global variables
    // that must be obtained by useContext
    const {
        products,
        quantityProducts,
    } = useContext(ProductContext);
    return (
        <>
            <div className='container'>
                {
                    products.length > 0 ?
                        <div>
                            <div className='flex-container'>
                                <h4 className='title-container'>
                                    Productos: {quantityProducts}
                                </h4>
                            </div>
                            <div className='products'>
                                <Products
                                    products={products}
                                />
                            </div>
                        </div>
                        :
                        <h4 className='text-center'>
                            Sin productos para mostrar.
                        </h4>
                }
            </div>
            <Footer />
        </>
    );
}

export default Container;