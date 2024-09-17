import styled from "styled-components"

export const CardContainer = styled.div`
  display: inline-block;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 40px 45px;
  @media (max-width: 768px) {
    padding: 25px 16px;
  }
  font-size: 14px;
  color: #747474;
  line-height: 30px;
  letter-spacing: 0.05em;

  width: 100%;
  margin: 16px 0;
`
export const Title = styled.header`
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 30px;
  letter-spacing: 0.05em;
  margin: 5px;
  color: #4f4f4f;
`

export const Description = styled.div`
  font-family: Proxima Nova, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  /* or 214% */

  letter-spacing: 0.05em;

  color: #747474;

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
