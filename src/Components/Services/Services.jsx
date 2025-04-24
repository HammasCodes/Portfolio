import React from 'react'
import './Services.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import Services_Data from "../../assets/services_data"
import Arrow_icon from "../../assets/arrow_icon.svg"

const services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <a href="https://www.linkedin.com/in/mohammad-hammas-426062233/"><p>Read more</p></a>
              <img src={Arrow_icon} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default services
