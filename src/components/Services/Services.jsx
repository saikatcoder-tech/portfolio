import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import TruncatedText from './TruncatedText';

const Services = () => {
  return (
    <div id="skills" className='services'>

        <div className="services-title">
            <h1>My Skills</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>

        <div className="services-container">
            {Services_Data.map((service, index)=>{
                return <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p><TruncatedText text={service.s_desc} maxChars={100} /></p>

                    <div className='services-readmore'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" /></div>
                </div>
            })}
        </div>

    </div>
  )
}

export default Services