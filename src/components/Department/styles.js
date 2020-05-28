import styled from 'styled-components'

export const Container = styled.div`
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.05em;
    color: ${props => props.default};
    margin: 50px auto 30px auto;
`

export const Header = styled.header`
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: ${props => props.footer};
    font-weight: bold;
    margin-bottom: 10px;
`

export const SecondaryHeader = styled.header`
    color: ${props => props.footer};    
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0.05em;
    margin-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 3px solid ${props => props.secondary};
`