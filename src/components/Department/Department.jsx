import React from "react"
import Position from "../Position"
import Card from "../Card"
import {
  Container,
  Header,
  SecondaryHeader,
  PositionWrapper,
  CardTitle,
  HeaderContainer,
  Link
} from "./styles"
import "./style.css"
import ReactHtmlParser from 'react-html-parser'; 

// const events = [
//   {
//     title: `Project Manager (Flagship Project)`,
//   },
//   {
//     title: `Programs Head (Flagship Project)`,
//   },
//   {
//     title: `Logistics (Flagship Project)`,
//   },
//   {
//     title: `Externals Head (Flagship Project)`,
//   },
//   {
//     title: `Project Manager (Minor Project)`,
//   },
//   {
//     title: `Logistics (Minor Project)`,
//   },
//   {
//     title: `Programs Head (Minor Project)`,
//   },
// ]

// const marketing = [
//   {
//     title: `Internal Branding Officer`,
//   },
//   {
//     title: `External Branding Officer`,
//   },
//   {
//     title: `Content Officer`,
//   },
//   {
//     title: `Community Engagement Officer`,
//   },
//   {
//     title: `Photo Editors`,
//   },
//   {
//     title: `Video Editor`,
//   },
// ]

const Department = ({
  department,
  defaultColor,
  secondaryColor,
  footerColor,
  primaryColor,
}) => (
    <div className="dept-panel">
      {/* {console.log(events.length)} */}
      <Container default={defaultColor}>
        <HeaderContainer>
          <div class="dept-info">
            <Header footer={footerColor}>{department.title}</Header>
            <p>{department.description}</p>
          </div>
          {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUXSoc%2Fvideos%2F447179010407211%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe> */}
          {ReactHtmlParser(department.video)}
        </HeaderContainer>
        {/* <div className="department-secondary-container">
          <SecondaryHeader footer={footerColor} secondary={secondaryColor}>{department.type}</SecondaryHeader>
        </div> */}
        <PositionWrapper>
          {department.positions === null || department.positions === undefined
            ? null
            : department.positions.map((position, index) => (
                <Position
                  title={position.title}
                  description={position.description}
                  key={index}
                  primary={primaryColor}
                  footer={footerColor}>
                  <Link
                    primary={primaryColor}
                    href={position.link}
                  >  
                    Read more
                  </Link>
              </Position>
              ))}
        </PositionWrapper>
      </Container>
    </div>
  )

export default Department
