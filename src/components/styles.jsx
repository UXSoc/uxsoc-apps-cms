import styled from "styled-components"

export const Header = styled.header`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.footer};
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