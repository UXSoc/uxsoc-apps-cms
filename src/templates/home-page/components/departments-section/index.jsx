import React, { useState, useCallback } from "react"
import Department from "../../../../components/Department"
import { Button } from "./styles"
import { Header } from "../../../../components/styles"
import { Container, Row, Col } from "react-bootstrap"

const DepartmentsSection = ({
  departmentsSection,
  primaryColor,
  secondaryColor,
  footerColor,
  defaultColor,
}) => {
  const [tab, setTab] = useState(0)
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  const [state, setState] = useState(false)

  const renderDepartment = () => {
    return departmentsSection.map((department, index) => {
      if (state) {
        forceUpdate()
        setState(false)
      }
      if (tab === index) {
        return (
          <Department
            department={department}
            key={index}
            defaultColor={defaultColor}
            secondaryColor={secondaryColor}
            footerColor={footerColor}
            primaryColor={primaryColor}
          />
        )
      }
    })
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <Header id="open-positions" footer={footerColor}>Open positions</Header>
          {departmentsSection.map((department, index) => (
            <Button
              primary={primaryColor}
              key={index}
              className={tab === index ? "active" : ""}
              onClick={() => {
                setState(true)
                setTab(index)
              }}
            >
              {department.title}
            </Button>
          ))}
        </Col>
        <Col sm={12} md={6}>
          {renderDepartment()}
        </Col>
      </Row>
    </Container>
  )
}

export default DepartmentsSection
