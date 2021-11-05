import React, { Fragment, useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import styled from "styled-components"

const FormsContainer = styled.div`
  .styled-tabs {
    font-family: "Proxima Nova";
    display: flex;
    justify-content: space-evenly;
  }

  .tab {
    list-style: none;
    padding: 10px;
    color: gray;
    text-transform: uppercase;

    :hover{
      cursor: pointer;
    }
  }
  .active-tab {
    color: black;
    border-bottom: solid 3px gray;
  }

  & div {
    background: url("https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493bq04qs3lwu2n8tbswlia2un9yjvc214lh6xg1p8g3&rid=200w.gif&ct=g") center center no-repeat;
  }
`

export const ApplyPageTemplate = ({ links }) => {

  const [tab, setTab] = useState(0)
  const [currentLink, setCurrentLink] = useState(links[0])

  useEffect(() => {
    tab === 0 ? setCurrentLink(links[0]) : setCurrentLink(links[1])
  }, [tab])

  console.log(tab, currentLink)
  
  return (
    <Fragment>
      <FormsContainer>
        <ul className="styled-tabs">
          <li className={tab === 0 ? "tab active-tab" : "tab"} onClick={() => setTab(0)} active={tab === 0}>
            Applying for AVP
          </li>
          <li className={tab === 1 ? "tab active-tab" : "tab"} onClick={() => setTab(1)} active={tab === 1}>
            Applying for Pool
          </li>
        </ul>
        <div>
          <iframe
            className="airtable-embed"
            title="airtable"
            src={currentLink}
            frameborder="0"
            onmousewheel=""
            width="100%"
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              overflow: 'hidden',
              height: '100vh',
            }}
          />
        </div>
      </FormsContainer>
    </Fragment>
  )
}

const ApplyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {
    slug,
    seo,
    primaryColor,
    footerColor,
    headerSection,
    links,
  } = frontmatter

  console.log(links)

  return (
    <Layout
      slug={slug}
      seo={seo}
      header={headerSection}
      header={headerSection}
      primary={primaryColor}
      footerColor={footerColor}
    >
      <ApplyPageTemplate {...{ links }} />
    </Layout>
  )
}

export default ApplyPage

export const ApplyPageQuery = graphql`
  query ApplyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        primaryColor
        footerColor
        seo {
          siteTitle
          siteDescription
        }
        headerSection {
          title
          buttonVisible
        }
        links
      }
    }
  }
`
