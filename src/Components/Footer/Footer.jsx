import React from 'react'
import './Footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import logo from './../../assets/images/eco-logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer classname='footer-wrapper'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo'>
            <div className=' d-flex align-items-center gap-2 mb-3'>
              <img src={logo} alt="logo" />
              <div>
                  <h1>Multimart</h1>
                  <span>Since 1999</span>
              </div>
            </div>
              <p className='footer-text'>
                Lorem ipsum dolor sit amet consectetur adipisic elit. Enim expedita molestias dolores sed dolore placeat, consectetur dolorum temporibus facre.
              </p>
            </div>
          </Col>
          <Col lg='3'>
            
            <div className='top-categories'>
              <h4>Top Categories</h4>
              <ListGroup className='mt-1'>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='#'>Mobile Phone</Link>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='#'>Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>
          <Col lg='2'>

            <div className='quick-links'>
              <h4>Quick Links</h4>
              <ListGroup className='mt-1'>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='#'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>
          <Col lg='3'>

            <div className='contact'>
              <h4>Contact</h4>
              <ListGroup className='mt-1'>
                <ListGroupItem className='border-0 ps-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <span>Mianwali, Punjab, Pakistan</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-phone-line'></i></span>
                  <span>+92-305-7388480</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 ps-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-mail-line'></i></span>
                  <span>abc123@email.com</span>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>
          <Col lg='12' className='mt-4'>
            <p className='text-center footer-copyright'>Copyright Protected {year}. Developed by Yasir Jehangir Khan. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer