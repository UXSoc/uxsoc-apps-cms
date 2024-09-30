import React from "react"
import Position from "../Position"
import Card from "../Card"
import {
  PositionWrapper,
  CardTitle,
  HeaderContainer,
  Link
} from "./styles"
import {
  Header,
  SecondaryHeader
} from "../styles"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap"

const Department = ({
  department,
  defaultColor,
  secondaryColor,
  footerColor,
  primaryColor,
}) => (
    <Container className="mb-5">
      <Header footer={footerColor}>{department.title}</Header>
      <p>{department.description}</p>
      {department.positions === null || department.positions === undefined ? null
      : department.positions.map((position, index) => (
          <Card>
            <Container fluid>
              <Row>
                <Col xs={8}>
                  <CardTitle>{ position.frontmatter.title }</CardTitle>
                </Col>
                <Col xs={4}>
                  <Link primary={primaryColor} href={ position.frontmatter.slug }>Read more</Link>
                </Col>
              </Row>
            </Container>
          </Card>
        ))}
    </Container>
  )

export default Department
