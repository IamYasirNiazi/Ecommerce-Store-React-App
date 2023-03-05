import React from 'react'
import './Header.css'
import Logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row, Col } from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Header = () => {

    // we used both useLocation and useEffect to make the active navigations bold
    const location = useLocation()

    // it is used to make the toggle functionable.
    const menuRef = useRef()
    const menuToggle = ()=>{
        menuRef.current.classList.toggle('active-menu')
    }
    
    // it is used to make the navigation bar sticky(fixed while scroll)
    const headerRef = useRef()
    const stickyScrollBar = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
                headerRef.current.classList.add('sticky-header')
            }else{
                headerRef.current.classList.remove('sticky-header')
            }
        })
    }

    useEffect(() => {

        // it is used to make the navigation bar sticky(fixed while scroll)
        stickyScrollBar()
        // return ()=> window.removeEventListener('scroll', stickyScrollBar) 

    }, [location])
    
  return (
    <>
        <header className="header" ref={headerRef}>
            <Container>
                <Row className='justify-content-center'>
                    <Col md='12'>
                        <div className="nav-wrapper">
                            <div className="logo">
                                <img src={Logo} className='logo-icon' alt="Logo" />
                                <div>
                                    <h1>Multimart</h1>
                                    <p>Since 1999</p>
                                </div>
                            </div>
                            <div className='navigation' ref={menuRef} onClick={menuToggle}>
                                <div className='menu'>
                                    <span className={location.pathname==='/home'? 'nav-active' : ''}><NavLink to='/home'>Home</NavLink></span>
                                    <span className={location.pathname==='/shop'? 'nav-active' : ''}><NavLink to='/shop'>Shop</NavLink></span>
                                    <span className={location.pathname==='/cart'? 'nav-active' : ''}><NavLink to='/cart'>Cart</NavLink></span>
                                </div>
                            </div>
                            <div className="nav-icons">
                                <span className='fav-icon'><i className="ri-heart-line"></i>
                                <span className='badge'>2</span>
                                </span>
                                <span className='cart-icon'><i className="ri-shopping-cart-line"></i>
                                <span className='badge'>1</span>
                                </span>
                                <motion.span
                                whileTap={{scale: 1.2}}
                                className='user-icon'><img src={userIcon} alt="User-Icon" /></motion.span>
                            
                                <div className="mobile-nav">
                                    <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    </>
  )
}

export default Header