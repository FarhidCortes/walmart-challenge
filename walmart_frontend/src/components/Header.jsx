import React, { useContext, useEffect, useState } from 'react';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { AiOutlineClear } from "@react-icons/all-files/ai/AiOutlineClear";
import ProductContext from '../context/ProductsProvider';
import axios from 'axios';
import Loading from './Loading';

const Header = () => {
    //Create states
    const [search, setsearch] = useState("");
    const [order, setOrder] = useState('');
    const [limit, setlimit] = useState(30);
    const [trigger, settrigger] = useState(false);

    //Get global variables with useContext
    const {
        changeProductState,
        quantityProducts,
        changequantityState,
        loading,
        setloading
    } = useContext(ProductContext);

    //When the trigger changes, load products
    useEffect(() => {
        searchProducts();
    }, [trigger])

    //Search pressing "Enter"
    const searchProductByKey = (e) => {
        e.preventDefault();
        if (e.key == 'Enter' && search != '') {
            settrigger(!trigger);

        }
    }
    //Search pressing  the search button
    const searchProductByButton = (e) => {
        e.preventDefault();
        if (search != '') {
            settrigger(!trigger);
        }
    }
    //Call the API and updates the state of products
    const searchProducts = async () => {
        const baseURL = import.meta.env.VITE_BACKEND_URL;
        console.log(baseURL);
        const config = {
            baseURL,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                search,
                order,
                limit
            },
        }
        try {
            //Loading page
            setloading(true);
            const resp = await axios('/api/products', config);
            setloading(false);
            if (resp.status == 200 && resp.statusText == 'OK') {
                //Update states
                changeProductState(resp.data.products);
                changequantityState(resp.data.total);
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    //On change in the "order by" select
    const handleChangeOrder = (e) => {
        setOrder(e.target.value);
        if (e.value != '') {
            settrigger(!trigger);
        }
    }
    //On change in the "limit" select
    const handleChangeLimit = (e) => {
        setlimit(e.target.value)
        if (e.value != '') {
            settrigger(!trigger);
        }
    }
    const clearForm = () => {
        setsearch('');
        setOrder('')
        setlimit('')
        changeProductState([])
        changequantityState(0);
    }
    return (
        <>
            <Loading
                loading={loading}
            />
            <div className='header'>
                <div>
                    <img className='logo' src="src/img/logo.svg" alt="" />
                </div>
                <div className='search'>
                    <input placeholder='Busca un producto' type="text" value={search} onKeyUp={searchProductByKey} onChange={e => setsearch(e.target.value)} maxLength="60" />
                    <button onClick={searchProductByButton}><FaSearch /></button>
                    <div>
                        <button className='clean-form' onClick={clearForm}><AiOutlineClear /></button>
                    </div>
                </div>

                <div className='options-header'>
                    {
                        quantityProducts > 1 ?
                            <div>
                                <select className='select' onChange={handleChangeOrder}>
                                    <option value=""> - Ordenar por - </option>
                                    <option value="1"> Menor a mayor precio </option>
                                    <option value="2"> Mayor a menor precio </option>
                                    <option value="3"> Marca </option>
                                </select>
                            </div> : null
                    }
                    {
                        quantityProducts > 30 ?
                            <div>
                                <select className='select' name="" id="" onChange={handleChangeLimit}>
                                    <option value=""> - Cantidad a mostrar - </option>
                                    <option value="30"> 30 </option>
                                    <option value="100"> 100 </option>
                                    <option value=""> Todos </option>
                                </select>
                            </div> : null
                    }
                </div>
            </div>
        </>
    );
}

export default Header;