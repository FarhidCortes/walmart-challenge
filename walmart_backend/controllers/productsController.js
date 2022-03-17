const Product = require('../models/product');
const {response, request} = require('express');

//Is executed when "/products" is called
const getProducts = async (req = request, res = response) => {
    const { limit = 30 , first = 0, search = '', order = ''} = req.query;
    let isPalindrome = false;
    //check if "seach" is a palindrome
    if( search != '' && search == search.split("").reverse().join("")){
        isPalindrome = true;
    }
    let orderBy = {//Order by id DESC
        id: 1
    };
    if(order == '1'){//Order by price ASC
        orderBy = {
            price: 1
        }
    }else if(order == '2'){//Order by price ASC
        orderBy = {
            price: -1
        }
    }else if(order == '3'){//Order by brand DESC
        orderBy = {
            brand: 1
        }
    }
    //Is executed when the search is a palindrome
    const calculateDescount = (products) => {

        const productsWithDescount = products.map(product => {

            let priceWithDiscount = parseInt((parseInt(product._doc.price)/2)).toString();
            //Adding two new attributes to read in frontend
            product._doc.price2 = priceWithDiscount;
            product._doc.withDiscount = true;
            return {
                product
            }
        });
        return productsWithDescount;
    }

    if(parseInt(search)){//if search string is a number, search by id
        let searchId = parseInt(search);
        let [total, products] = await Promise.all([
            Product.countDocuments({id: searchId}), 
            Product.find({id: searchId})
            .skip(Number(first))
            .limit(Number(limit))
            .sort(orderBy)
        ]);
        if(isPalindrome){
            calculateDescount(products);
        }
        return res.json({total, products});
    }else{//search by brand or description
        //Define regex to search in database
        var re = new RegExp(search, 'i');
        let [total, products] = await Promise.all([
            Product.countDocuments({$or:[{ 'brand': { $regex: re }}, { 'description': { $regex: re }}]}),
            Product.find({$or:[{ 'brand': { $regex: re }}, { 'description': { $regex: re }}]})
            .skip(Number(first)) //applying filters given in parameters
            .limit(Number(limit))
            .sort(orderBy)
        ]);
        if(isPalindrome){
            calculateDescount(products);
        }
        return res.json({total, products});
    }
}

module.exports = {
    getProducts
}