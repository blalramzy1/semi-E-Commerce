import React from 'react'
import css from './virtual.module.css'
import Shade from '../../assests/shade.png'
import  ReactComponentImage from 'react-compare-image'
import Before from '../../assests/before.png'
import After from '../../assests/after.png'

const virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>VIRTUAL TRY-ON</span>
            <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
            <span>Try Now!</span>
            <img src={Shade} alt="" />
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactComponentImage leftImage={Before} 
                 rightImage={After}/>
            </div>
            
        </div>
    </div>
      )
}

export default virtual