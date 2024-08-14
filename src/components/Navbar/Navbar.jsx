import React from "react"
import { Link } from 'gatsby'
import logo from '../../assets/images/logo.png'
import "./style.css"

const Navbar = ({ slug, header, primary }) => (
  <div className="header" style={{ background: `${primary}` }}>
    <div className="header__logo-wrapper">
      <figure className="header__logo-container">
        <Link to="/"><img src={logo} alt="logo" className="header__logo-image" /></Link>
      </figure>
      <h1 className="header__item">{header.title}</h1>
    </div>
    {
      header.buttonVisible ? <Link className="header__apply-link" to={slug === "/apply" ? "/" : "/apply"}>{slug === "/apply" ? "Primer" : "Apply"}</Link> : null
    }
  </div>
)

export default Navbar
