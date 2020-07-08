import React from "react"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Title, DeptPosition } from "./styles"

const Position = ({ title, description, primary, footer }) => (
  <div>
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
  </div>
)

export default Position
