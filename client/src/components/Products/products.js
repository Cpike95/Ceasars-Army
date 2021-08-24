import React from 'react'

import './products.css'

const mockProducts = [
    {
        title: 'Product 1',
        description: 'LEts get super shreddy my dude '
    },
    {
        title: 'Product 2',
        description: 'LEts get super shreddy my dude '
    },
    {
        title: 'Product 3',
        description: 'LEts get super shreddy my dude '
    },
    {
        title: 'Product 4',
        description: 'LEts get super shreddy my dude '
    },
]
console.log(mockProducts)
const Products = () => {

    // const ProductCard = () => {
    //     return (
            
    //     )
    // }
    return (
        <div className='product-wrapper'>
            <div className='product-content'>
                {/* MAP THE PRODUCTS */}
                {mockProducts.map((product, index) => {
                return (
                <div className='product-card'>
                    <div className='product-title'>
                        ${product.title}
                    </div>
                    <div className='product-description'>
                        ${product.description}
                    </div>
                </div>
                )
                })}
            </div>
        </div>
    )
}

export default Products;