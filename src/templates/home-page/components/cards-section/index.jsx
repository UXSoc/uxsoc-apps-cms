import React from 'react';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import { Container, Row, Col, CardTitle } from "react-bootstrap"
import Card from '../../../../components/Card';
import { CardBody, CardTitleCustom, OuterContainer } from './styles';


const CardSection = ({
  cardSection,
  defaultColor, 
  primaryColor,
  secondaryColor,
  footerColor,
}) => {
  return (
    <OuterContainer>
    <Container fluid>
      <Row>

        {/* FIRST CARD */}
        <Col sm={12} md={4}>
          <Card>
            <CardTitleCustom color={primaryColor}>
              {cardSection.card1.title}
            </CardTitleCustom>
            <CardBody color={primaryColor} dangerouslySetInnerHTML={{
                __html: remark()
                  .use(recommended)
                  .use(remarkHtml)
                  .processSync(cardSection.card1.description).toString()
              }}>
            </CardBody>
          </Card>
        </Col>
        
        {/* SECOND CARD */}
        <Col sm={12} md={4}>
          <Card>
            <CardTitleCustom color={primaryColor}>
              {cardSection.card2.title}
            </CardTitleCustom>
            <CardBody color={primaryColor} dangerouslySetInnerHTML={{
                __html: remark()
                  .use(recommended)
                  .use(remarkHtml)
                  .processSync(cardSection.card2.description).toString()
              }}>
            </CardBody>
          </Card>
        </Col>
        
        {/* THIRD CARD */}
        <Col sm={12} md={4}>
          <Card>
            <CardTitleCustom color={primaryColor}>
              {cardSection.card3.title}
            </CardTitleCustom>
            <CardBody color={primaryColor} dangerouslySetInnerHTML={{
                __html: remark()
                  .use(recommended)
                  .use(remarkHtml)
                  .processSync(cardSection.card3.description).toString()
              }}>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </Container>
    </OuterContainer>
  )
}

export default CardSection;