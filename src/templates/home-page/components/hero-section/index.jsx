import React from 'react';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import { Main, Title } from './styles'

const HeroSection = ({ heroSection, defaultColor, primaryColor }) => (
    <div>
        <Title primary={primaryColor}>{heroSection.title}</Title>
        <Main default={defaultColor} primary={primaryColor} dangerouslySetInnerHTML={{
            __html: remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(heroSection.description).toString()
        }} />
    </div>
)

export default HeroSection;