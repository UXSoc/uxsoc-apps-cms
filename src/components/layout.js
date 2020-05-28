/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from './Navbar';
import SEO from './seo';
import Footer from './Footer';
import PropTypes from "prop-types"

const Layout = ({ children, seo, header, slug, primary, footerColor }) => {
  const { siteTitle, siteDescription } = seo;
  return (
    <>
      <Navbar header={header} slug={slug} primary={primary} />
      <SEO
        title={siteTitle}
        description={siteDescription}
      />
      {children}
      <Footer footerColor={footerColor} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
