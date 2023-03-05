import React from 'react'
import Hero_Image from '../assets/images/hero-img.png'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../Styles/Home.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import ProductList from '../UI/Product_List'
import Products from '../assets/data/products'
import { useState, useEffect } from 'react'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../UI/Clock'

const Home = () => {

  const [TrendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(() => {

    const filteredTrendingProducts = Products.filter((item)=>{
      return item.category==='chair'
    })

    const filteredSalesProducts = Products.filter((item)=>{
      return item.category==='sofa'
    })

    const filteredMobileProducts = Products.filter((item)=>{
      return item.category==='mobile'
    })

    const filteredWirelessProducts = Products.filter((item)=>{
      return item.category==='wireless'
    })

    const filteredPopularProducts = Products.filter((item)=>{
      return item.category==='watch'
    })

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)

  // eslint-disable-next-line
  }, [])
  

  return (
    <Helmet title={"Home"}>

      <section className='hero-section'>
        <Container>
          <Row className='justify-content-center align-items-center'>
            <Col lg='6'>
              <div className='hero-content'>
                <p>Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima rerum repudiandae natus maxime nobis earum expedita aspernatur pariatur quo dolores?</p>
                <Link to='/shop'><motion.button
                whileTap={{scale: 1.2}}                
                className='buy-btn'>SHOP NOW</motion.button></Link>
              </div>
            </Col>
            <Col lg='6'>
              <div className='hero-image'>
              <img src={Hero_Image} className='img-fluid' alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending-products">
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section-title">Trending Products</h2>
            </Col>
            <ProductList data={TrendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="sales-products">
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section-title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="counter-banner">
        <Container>
          <Row className='justify-content-center align-items-center'>
            <Col lg='6'>
              <div className="counter-content">
                <div>
                  <h3 className='mb-2 fs-6'>Limited Offers</h3>
                  <h4 className='mb-3 fs-5'>Quality Armchair</h4>
                </div>
                <Clock />
                <Link to='/shop'><motion.button
                whileTap={{scale: 1.2}}
                className='buy-btn'>Shop Now</motion.button></Link>
              </div>
            </Col>
            <Col lg='6' className='text-end'>
              <div className="counter-image">
                <img src={counterImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='new-arrivals'>
      <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section-title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className='popular-products'>
      <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section-title mb-5">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home