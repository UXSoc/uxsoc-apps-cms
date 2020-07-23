import React from "react"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { CardContainer, Title, Description } from "./styles"

const Card = ({ title, description, footer, children }) => (
  <CardContainer>
    <Title>{title}</Title>
    <Description
      footer={footer}
      // dangerouslySetInnerHTML={{
      //   __html: description,
      //   // remark()
      //   //   .use(recommended)
      //   //   .use(remarkHtml)
      //   //   .processSync(description)
      //   //   .toString(),
      // }}
    >
      {children}
    </Description>
  </CardContainer>
)

export default Card
