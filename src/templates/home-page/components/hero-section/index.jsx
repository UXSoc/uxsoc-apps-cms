import React from 'react';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import { Main, Button, HeroContainer } from './styles'
import { Header, Container } from "../../../../components/styles"

const HeroSection = ({ 
    heroSection, 
    defaultColor, 
    primaryColor 
}) => {
    return (
    <HeroContainer>
        <div>
            <div className="text-center">
                <Header footer={primaryColor}>{heroSection.title}</Header>
            </div>
                <Main default={defaultColor} primary={primaryColor} dangerouslySetInnerHTML={{
                    __html: remark()
                        .use(recommended)
                        .use(remarkHtml)
                        .processSync(heroSection.description).toString()
                }} />
            <div className="text-center">
                <Button primary={primaryColor} href="">Open Positions</Button>
            </div>
        </div>
    </HeroContainer>   
    )
}

export default HeroSection;