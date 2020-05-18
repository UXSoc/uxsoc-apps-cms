import React, { Fragment } from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"



export const ApplyPageTemplate = ({ link }) => (
    <Fragment>
        <iframe className="airtable-embed" src={link} frameborder="0" onmousewheel="" width="100%" style={{ background: "transparent", border: "1px solid #ccc", overflow: "hidden", height: "100vh" }} />
    </Fragment >
)

const ApplyPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const { seo, headerSection, link } = frontmatter;
    return (
        <Layout seo={seo} header={headerSection}>
            <ApplyPageTemplate {...{ link }} />
        </Layout>
    )
}

export default ApplyPage

export const ApplyPageQuery = graphql`
  query ApplyPage($id: String!) {
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
        link
      }
    }
  }
`


