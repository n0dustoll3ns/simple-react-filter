import React, { useEffect, useState } from "react";
import logo from '../../assets/LOT-logo.svg'
import s from './Header.module.scss'

interface Props { }

export default function Header (prop: Props) {
  return <header className={s.header}>
    <div className={s.wrapper}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
    <div className={s.wrapper}>
      <div className={s.title}>Some Header</div>
      <div className={s.change_theme}>
      </div>
    </div>





  </header>
}