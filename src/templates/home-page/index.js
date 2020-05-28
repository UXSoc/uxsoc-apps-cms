import React, { Fragment } from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

import HeroSection from './components/hero-section'
import DepartmentsSection from './components/departments-section'


export const HomePageTemplate = ({ heroSection, departmentsSection, backgroundColor, primaryColor, secondaryColor, defaultColor, footerColor }) => (
  <Fragment>
    <main style={{ background: `${backgroundColor}` }}>
      <HeroSection heroSection={heroSection} defaultColor={defaultColor} primaryColor={primaryColor} />
      <DepartmentsSection departmentsSection={departmentsSection} primaryColor={primaryColor} defaultColor={defaultColor} secondaryColor={secondaryColor} footerColor={footerColor} backgroundColor={backgroundColor} />
    </main>
  </Fragment>
)

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { slug, seo, backgroundColor, primaryColor, secondaryColor, defaultColor, footerColor, headerSection, heroSection, departmentsSection } = frontmatter;
  return (
    <Layout slug={slug} seo={seo} header={headerSection} primary={primaryColor} footerColor={footerColor}>
      <HomePageTemplate {...{ heroSection, departmentsSection, backgroundColor, primaryColor, secondaryColor, defaultColor, footerColor }} />
    </Layout>
  )
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        backgroundColor
        primaryColor
        secondaryColor
        defaultColor
        footerColor
        seo {
          siteTitle
          siteDescription
        }
        headerSection {
          title
          buttonVisible
        }
        heroSection {
          title
          description
        }
        departmentsSection {
          title
          description
          type
          positions {
            title
            description
          }
        }
      }
    }
  }
`


