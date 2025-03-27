import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import Title from './Title'
import ProductItem from './Components/ProductItem'

const BestSellers = () => {

    const { products } = useContext(ShopContext)

    const [bestSellers, setBestSellers] = useState([])

    useEffect(() => {
        const bestProducts = products.filter((item)=>(item.bestSellers));
        setBestSellers(bestProducts.slice(0, 10));
    }, [])

    return (

        <div>
            <div><Title title="BestSellers" /></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    bestSellers.map((item,index)=>(
                        <ProductItem key={index} id={item.id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>

    )
}

export default BestSellers