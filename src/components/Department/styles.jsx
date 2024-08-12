import styled from "styled-components"

export const Container = styled.div`
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: ${props => props.default};
  margin: 50px auto 30px auto;
`


export const CardTitle = styled.h4`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: ${props => props.primary};
  font-weight: bold;
  margin-top: 20px;
`

export const HeaderContainer = styled.div`
  display: flex;

  iframe {
    margin: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .dept-info, iframe {
      width: 100%;
    }

    .dept-info {
      margin: 0;
      margin-bottom: 24px;
    }
  }
`
export const Link = styled.a`
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
    float: right;
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