import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState, useEffect } from 'react'
import Title from './Title'
import ProductItem from './Components/ProductItem'

const LatestCollection = () => {


    const { products } = useContext(ShopContext)
    const [latestCollection, setLatestCollection] = useState([])

    useEffect(() => {
        setLatestCollection(products.slice(0, 10));
    }, [])


    return (
        <div>
            <div>
                <Title title="Latest Collection" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {latestCollection.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>

        </div>

    )
}

export default LatestCollection