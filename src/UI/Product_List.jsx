import React from 'react'
import ProductCard from './Product_Card'

const Product_List = ({data}) => {
  return (
    <>
    {data.map((item, index)=>{
      return <ProductCard key={index} item={item} />
    })}
    </>
  )
}

export default Product_List