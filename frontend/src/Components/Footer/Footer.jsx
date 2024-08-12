import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>A Full Stack developer is a professional responsible for working on
          both front-end and back-end development processes.
          <br /> They design, develop, and maintain fully-fledged and
          functioning platforms with databases or servers.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <input type="email" placeholder='enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&#169; 2024 Vamsi Krishna D. All rights are reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
