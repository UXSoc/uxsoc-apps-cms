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

export const Button = styled.button`
    font-family: Proxima Nova;
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    letter-spacing: 0.05em;
    text-align: center;
    border: 1px solid ${props => props.primary};
    color: ${props => props.primary};
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    cursor: pointer;
    width: auto;
    transition: 0.3s all ease-in-out;
    background: transparent;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.primary};
        color: white;
        font-weight: bold;
    }

    &.active {
        background-color: ${props => props.primary};
        color: white;
        font-weight: bold;
    }
`
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:87vh;
`