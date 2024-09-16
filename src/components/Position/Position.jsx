import React from "react"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Title, DeptPosition, CardContainer } from "./styles"

const Position = ({ title, description, primary, headingColor, footer, children }) => (
  <CardContainer>
    <Title primary={primary} headingColor={headingColor}>{title}</Title>
    <DeptPosition
      footer={footer}
      headingColor={headingColor}
      dangerouslySetInnerHTML={{
        __html: remark()
          .use(recommended)
          .use(remarkHtml)
          .processSync(description)
          .toString(),
      }}
    />
    { children }
  </CardContainer>
)

export default Position
