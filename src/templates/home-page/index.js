import React, { Fragment } from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import "./styles.css"

import HeroSection from './components/hero-section'
import DepartmentsSection from './components/departments-section'


export const HomePageTemplate = ({ heroSection, departmentsSection }) => (
  <Fragment>
    <main>
      <HeroSection heroSection={heroSection} />
      <DepartmentsSection departmentsSection={departmentsSection} />
    </main>
  </Fragment>
)

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { slug, seo, headerSection, heroSection, departmentsSection } = frontmatter;
  return (
    <Layout slug={slug} seo={seo} header={headerSection}>
      <HomePageTemplate {...{ heroSection, departmentsSection }} />
    </Layout>
  )
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        seo {
          siteTitle
          siteDescription
          siteKeywords
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


