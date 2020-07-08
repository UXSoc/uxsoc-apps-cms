import styled from "styled-components"

export const DeptPosition = styled.div`
  & strong,
  b {
    color: ${props => props.footer};
  }

  & img {
    margin: 30px 0;
    width: 100%;

    @media (max-width: 768px) {
      margin: 16px 0;
    }
  }
`

export const Title = styled.h4`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: ${props => props.primary};
  font-weight: bold;
  margin-top: 20px;
`
