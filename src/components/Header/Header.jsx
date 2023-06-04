import React from 'react'
import css from "./Header.module.css"
import logo from "../../assests/logo.png"
import {CgShoppingBag} from "react-icons/cg"

const Header = () => {
  return (
    <div className={css.contanier}>
      <div className={css.logo}>
        <img src={logo} alt=''/>
        <span>Amazon</span>
      </div>
      <div className={css.right}>
        <ul className={css.menu}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" placeholder="Search" className={css.search}/>
        <CgShoppingBag className={css.cart}/>
      </div>
    </div>
  )
}

export default Header