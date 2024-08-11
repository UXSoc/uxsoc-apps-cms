import React, { Fragment } from "react"
import Layout from "../../components/layout"
import Position from "../../components/Position"
import { graphql } from "gatsby"

export default function PositionPageTemplate({data}) {
    const { frontmatter } = data.markdownRemark
    const {
        slug,
        seo,
        primaryColor,
        footerColor,
        title,
        description
    } = frontmatter
    const headerSection = {
        "title" : "UX Society Applications",
        "buttonVisible": true
    }

    return (
        <Layout
            slug={slug}
            seo={seo}
            header={headerSection}
            primary={primaryColor}
            footerColor={footerColor}
            >
            <Fragment>
                <Position
                    title={title}
                    description={description}
                    primary={primaryColor}
                    footer={footerColor}
                />
            </Fragment>
            
        </Layout>
    )
}

export const PositionPageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                slug
                primaryColor
                footerColor
                seo {
                    siteDescription
                    siteTitle
                }
                title
                description
            }
        }
    }
`