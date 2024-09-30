import React, { Fragment } from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

import HeroSection from "./components/hero-section"
import CardSection from "./components/cards-section"
import DepartmentsSection from "./components/departments-section"

export const HomePageTemplate = ({
  heroSection,
  cardSection,
  departmentsSection,
  backgroundColor,
  primaryColor,
  secondaryColor,
  defaultColor,
  footerColor,
}) => (
  <Fragment>
    <main style={{ background: `${backgroundColor}`, padding:'0' }}>
      <HeroSection
        heroSection={heroSection}
        defaultColor={defaultColor}
        primaryColor={primaryColor}
      />
      <CardSection
        cardSection={cardSection}
        defaultColor={defaultColor}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        footerColor={footerColor}
      />
      <DepartmentsSection
        departmentsSection={departmentsSection}
        primaryColor={primaryColor}
        defaultColor={defaultColor}
        secondaryColor={secondaryColor}
        footerColor={footerColor}
        backgroundColor={backgroundColor}
      />
    </main>
  </Fragment>
)

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {
    slug,
    seo,
    backgroundColor,
    primaryColor,
    secondaryColor,
    defaultColor,
    footerColor,
    headerSection,
    heroSection,
    cardSection,
    departmentsSection,
  } = frontmatter
  return (
    <Layout
      slug={slug}
      seo={seo}
      header={headerSection}
      primary={primaryColor}
      footerColor={footerColor}
    >
      <HomePageTemplate
        {...{
          heroSection,
          cardSection,
          departmentsSection,
          backgroundColor,
          primaryColor,
          secondaryColor,
          defaultColor,
          footerColor,
        }}
      />
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
        cardSection {
          card1 {
            title
            description
          }
          card2 {
            title
            description
          }
          card3 {
            title
            description
          }
        }
        departmentsSection {
          department {
            name
            title
            description
            positions {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`
