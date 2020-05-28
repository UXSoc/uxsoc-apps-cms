import styled from 'styled-components'

export const Main = styled.div`
    color: ${ props => props.default};
    font-family: proxima nova;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    width: 70%;
    letter-spacing: 0.05em;
    margin: auto;

    strong, b {
        color: ${ props => props.primary};
    }
`

export const Title = styled.h1`
    font-family: Proxima Nova;
    font-size: 15px;
    line-height: 50px;
    margin: 0px;
    text-align: center;
    letter-spacing: 0.05em;
    color: ${ props => props.primary};
    font-weight: bold;
`