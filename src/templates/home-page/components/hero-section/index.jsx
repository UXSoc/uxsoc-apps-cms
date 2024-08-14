import React from 'react';
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';
import { Link } from '../../../../components/Department/styles'
import { Main, HeroContainer } from './styles'
import { Header } from "../../../../components/styles"

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
                <div style={{textAlign:'center'}}>
                    <Link primary={primaryColor} href="#open-positions" style={{float:'none'}}>Open Positions</Link>
                </div>
        </div>
    </HeroContainer>   
    )
}

export default HeroSection;