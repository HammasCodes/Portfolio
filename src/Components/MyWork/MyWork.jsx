import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import Arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <a
                            key={index}
                            href="https://github.com/HammasCodes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={work.w_img}
                                alt={`Work ${index}`}
                                style={{
                                    width: '100%',
                                    height: '200px', // adjust as needed
                                    objectFit: 'cover',
                                    borderRadius: '10px' // optional: adds smooth corners
                                }}
                            />
                        </a>
                    );
                })}
            </div>


            <div className="mywork-showmore">
                <a href="https://github.com/HammasCodes" style={{ textDecoration: "none" }} target='blank'><p>Show More</p></a>
                <img src={Arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork
