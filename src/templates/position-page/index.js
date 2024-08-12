import React, { Fragment } from "react"
import Layout from "../../components/layout"
import Position from "../../components/Position"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

export default function PositionPageTemplate({data}) {
    const { frontmatter } = data.markdownRemark
    const {
        slug,
        seo,
        backgroundColor,
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
                <main style={{ background: `${backgroundColor}` }}>
                    <Container>
                        <Position
                            title={title}
                            description={description}
                            primary={primaryColor}
                            footer={footerColor}
                        />
                    </Container>
                </main>
            </Fragment>
            
        </Layout>
    )
}

export const PositionPageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                slug
                backgroundColor
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