import React from "react";
import {Icon} from "antd";

export  default function Nyheader() {
    return(
        <div className='footerContainer'>
            <div className="footerbox">
                <div className="footerItem">
                    <div className="footerItem-title">FOLLOW US</div>
                    <div className="footerItem-main">
                        <p>Follow us in social media</p>
                        <div className="footer-icon-box">
                            <Icon type="twitter" />
                            <Icon type="apple" />
                            <Icon type="github" />
                            <Icon type="google" />
                        </div>
                    </div>
                </div>
                <div className="footerItem">
                    <div className="footerItem-title">NEWSLETTER</div>
                    <div className="footerItem-main">
                        <p>Sign up for newsletter</p>
                        <div className='footer-email'>
                            <input type="email" name="" id="" placeholder='Enter Your Email Address...' />
                            <p>JOIN</p>
                        </div>
                    </div>
                </div>
                <div className="footerItem">
                    <div className="footerItem-title">GENERAL LINKS</div>
                    <div className="footerItem-main">
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Return Policy</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerItem">
                    <div className="footerItem-title">MY ACCOUNT</div>
                    <div className="footerItem-main">
                        <ul>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">My Order</a></li>
                            <li><a href="/">My Reviews</a></li>
                            <li><a href="/">My Favorite</a></li>
                            <li><a href="/">Site Map</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Copyright Notice ©2016 abc.com All rights reserved.</p>
        </div>
    )

}