import React from 'react'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import './style.css'

const Position = ({ title, description }) => (
  <div className="department-positions">
    <h4>{title}</h4>
    <div dangerouslySetInnerHTML={{
      __html: remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(description).toString()
    }} />
  </div>
)

export default Position;