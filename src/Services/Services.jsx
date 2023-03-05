import React from 'react'
import './Services.css'
import {Container, Row, Col} from 'reactstrap'
import serviceData from './../assets/data/serviceData'
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <section className="services-wrapper">
        <Container>
            <Row>

                {serviceData.map((item, index)=>{

                   return <Col md='3' key={index}>
                    <motion.div
                    whileHover={{scale: 1.1}}
                    className="services" style={{backgroundColor: `${item.bg}`}}>
                        <span><i className={item.icon}></i></span>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                    </Col>
                })}

            </Row>
        </Container>


    </section>
  )
}

export default Services