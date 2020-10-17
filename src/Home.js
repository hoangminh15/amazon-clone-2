import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            {/*The poster */}
            <div className="poster">
                <img className="poster" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />
            </div>
            <div className="product">
                <div className="product__row">
                    {/*adding some props to product*/}
                    <Product />
                    <Product />
                </div>
                <div className="product__row">
                    {/*adding some props to product*/}
                    <Product />
                    <Product />
                </div>
                <div className="product__row">
                    {/*adding some props to product*/}
                    <Product />
                    <Product />
                </div>

            </div>
            {/*List of products*/}
        </div>
    )
}

export default Home
