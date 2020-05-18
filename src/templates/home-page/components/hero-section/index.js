import React from 'react';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import './style.css';

const HeroSection = ({ heroSection }) => (
    <div>
        <h1>{heroSection.title}</h1>
        <div className="main__spiel" dangerouslySetInnerHTML={{
            __html: remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(heroSection.description).toString()
        }} />
    </div>
)

export default HeroSection;