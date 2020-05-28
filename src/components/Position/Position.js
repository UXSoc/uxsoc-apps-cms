import React from 'react'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import { Title, DeptPosition } from './styles'

const Position = ({ title, description, primary, footer }) => (
  <DeptPosition footer={footer}>
    <Title primary={primary}>{title}</Title>
    <div dangerouslySetInnerHTML={{
      __html: remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(description).toString()
    }} />
  </DeptPosition>
)

export default Position;