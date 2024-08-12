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
    <div>
      <Header footer={footerColor}>{department.title}</Header>
      <p>{department.description}</p>
      {department.positions === null || department.positions === undefined ? null
      : department.positions.map((position, index) => (
          <Card>
            <Container fluid>
              <Row>
                <Col xs={8}>
                  <CardTitle>{ position.title }</CardTitle>
                </Col>
                <Col xs={4}>
                  <Link primary={primaryColor} href={ position.link }>Read more</Link>
                </Col>
              </Row>
            </Container>
          </Card>
        ))}
    </div>
  )

export default Department
