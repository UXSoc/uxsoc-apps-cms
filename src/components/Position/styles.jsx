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

export const CardContainer = styled.div`
  display: inline-block;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 45px;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.05em;

  width: 100%;
  margin: 16px 0;
`

export const Title = styled.h4`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: ${props => props.primary};
  font-weight: bold;
  margin-top: 20px;
`
