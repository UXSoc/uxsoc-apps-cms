import React from "react"
import { Link } from 'gatsby'
import logo from '../../assets/images/logo.png'
import "./style.css"

const Navbar = ({ slug, header }) => (
  <div className="header">
    <div className="header__logo-wrapper">
      <figure className="header__logo-container">
        <Link to="/"><img src={logo} alt="logo" className="header__logo-image" /></Link>
      </figure>
      {console.log(header.title)}
      <h1 className="header__item">{header.title}</h1>
    </div>
    {
      header.buttonVisible ? <Link to="/apply"><div className="header__apply-link">{slug === "/" ? "Apply" : "Primer"}</div></Link> : null
    }
  </div>
)

export default Navbar
