import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'

const Product = () => {

    let [result, setResult] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                setResult(res.data.products)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(result)
    return (
        <>          
            <h2>Product component</h2>
            <div className='container'>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {result.map((item,i)=>{
                        return <div class="col">
                        <div class="card">
                          <img src={item.thumbnail} class="card-img-top" style={{height:"250px"}} alt="..."/>
                          <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text"><b>Category : </b>{item.category}</p>
                            <p class="card-text"><b>Price : </b>{item.price}</p>
                            <p class="card-text"><b>Discount : </b>{item.discountPercentage}%</p>
                            <p class="card-text"><b>Rating : </b>{item.rating}</p>
                            <p class="card-text"><b>Stock : </b>{item.stock}</p>
                          </div>
                        </div>
                      </div>
                    })}    
            </div>
            </div>
        </>
    )
}
export default Product;
