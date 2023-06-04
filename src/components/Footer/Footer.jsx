import React from 'react'
import css from "./Footer.module.css"
import logo from "../../assests/logo.png"

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}> 
            <img src={logo} alt=""/>
            <span>Amazon</span>
        </div>   

        <div className={css.block}>
            <div className={css.details}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                    <span>111 north avenue Orlando, FL 32801</span>
                </span>
            </div>
        </div>   

        <div className={css.block}>
            <div className={css.details}>
                <span>Account</span>
                <span className={css.pngLine}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>

                    <span>Sign In</span>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.details}>
                <span>Company</span>
                <span className={css.pngLine}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                    <span>About us</span>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.details}>
                <span>Resources</span>
                <span className={css.pngLine}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                 </svg>
                    <span>Safety Privacy & Terms</span>
                </span>
            </div>
        </div>                                              
    </div>
    <div className={css.copyRight}>
        <span>Copyright ©2022 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
    </div>
</div>
  )
}

export default Footer