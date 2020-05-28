import React from "react"
import "./style.css"

const Footer = ({ footerColor }) => (
    <footer style={{ background: `${footerColor}` }}>
        Passionately made by <a className="footer__link" href="https://uxsociety.org" target="_blank" rel="noopener noreferrer">User Experience Society</a>.
    </footer>
);

export default Footer;