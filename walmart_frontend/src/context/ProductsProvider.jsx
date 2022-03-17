import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductsProvider = ({children}) => {
    //Define state of global variables
    const [products, setproducts] = useState([]);
    const [quantityProducts, setquantityProducts] = useState(0);
    const [loading, setloading] = useState(false);

    const changeProductState = (products) => {
        setproducts(products);
    }
    const changequantityState = (quantity) => {
        setquantityProducts(quantity);
    }
    return (

        <ProductContext.Provider
            value={{
                products,
                changeProductState,
                quantityProducts,
                changequantityState,
                loading,
                setloading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export{
    ProductsProvider
}

export default ProductContext;