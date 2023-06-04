import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assests/hero.png";
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from "react-icons/bs";


const Hero = () => {
  return (
<div className={css.contanier}>

    {/* left side*/}
    <div className={css.h_side}>
        <span className={css.text1}>skin Protection Cream</span>
    
    <div className={css.text2}>
        <span>Trendy Collection</span>
        <span>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
        </div>
    </div>
        {/* middle side hero img*/}

    <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600} />
            <div className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Best signup Offer</span>
                
                <div>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    </div>
    {/* rifht side*/}
    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span >1.5m</span>
            <span >Monthly Traffic</span>
        </div>
        <div className={css.customers}>
            <span>100K</span>
            <span>Happy Customers</span>
        </div>
    </div>
</div>
    )
}

export default Hero