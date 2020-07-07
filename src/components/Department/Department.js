import React from "react"
import Position from "../Position"
import Card from "../Card"
import {
  Container,
  Header,
  SecondaryHeader,
  PositionWrapper,
  CardTitle,
} from "./styles"
import "./style.css"

const Department = ({
  department,
  defaultColor,
  secondaryColor,
  footerColor,
  primaryColor,
}) => (
  <div className="dept-panel">
    <Container default={defaultColor}>
      <Header footer={footerColor}>{department.title}</Header>
      <p>{department.description}</p>
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
                footer={footerColor}
              />
            ))}
      </PositionWrapper>

      <CardTitle primary={primaryColor}>
        {department.cardSectionTitle}
      </CardTitle>
      {console.log(department.cards)}
      <div className="department-info-container">
        {department.cards === null || department.cards === undefined
          ? null
          : department.cards.map((card, index) => (
              <Card
                title={card.title}
                description={card.description}
                key={index}
                footer={footerColor}
              />
            ))}
      </div>
    </Container>
  </div>
)

export default Department
