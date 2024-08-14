import React from "react"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Title, DeptPosition, CardContainer } from "./styles"

const Position = ({ title, description, primary, footer, children }) => (
  <CardContainer>
    <Title primary={primary}>{title}</Title>
    <DeptPosition
      footer={footer}
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
