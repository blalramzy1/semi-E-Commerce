import React from 'react'
import css from './Clints.module.css'
import Hero from '../../assests/testimonialHero.png'
import { TestimonialsData } from "../../data/testClints"
import { SwiperSlide , Swiper } from 'swiper/react'


const Clints = () => {
  return (
    <div className={css.Clints}>
        <div className={css.wrapper}>
            <div className={css.contanier}>
            <span>TOP RATED</span>
            <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
           </div>
        
    <img src={Hero} alt="" />
         <div className={css.contanier}>
            <span>100K</span>
            <span>HAPPY CUSTOMERS WITH US</span>
        </div>
       </div>
       <div className={css.reviews}>Reviews</div>

       <div className={css.carousal}>
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className={css.tCarousal}
        >
            {
                TestimonialsData.map((testimonial, i)=>(
                    <SwiperSlide>
                        <div className={css.testimonial}>
                            <img src={testimonial.image} alt=""/>
                            <span>{testimonial.comment}</span>
                            <span>----------------------</span>
                            <span>{testimonial.name}</span>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
       </div>



    </div>
    )
}

export default Clints