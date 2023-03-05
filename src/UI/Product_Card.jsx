import React from 'react'
import '../Styles/Product_Card.css'
import {Col} from 'reactstrap'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Product_Card = ({item}) => {
  return (
    <Col md='3'>
        <div className='product-card'>
            <motion.div
            whileHover={{scale: .9}}
            className="product-bg">
                <img src={item.imgUrl} className='img-fluid' alt="" />
            </motion.div>
            <div className='product-info'>
                <h3><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()}</span>
            </div>
            <div className='product-card-bottom'>
                <span>${item.price}</span>
                <motion.span whileTap={{scale: 1.2}}><i className='ri-add-line'></i></motion.span>
            </div>
        </div>
    </Col>
  )
}

export default Product_Card