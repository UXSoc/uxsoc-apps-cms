import styled from 'styled-components'


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