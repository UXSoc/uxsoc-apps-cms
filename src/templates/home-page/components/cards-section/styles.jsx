import styled from 'styled-components'

export const CardBody = styled.div`
	font-size: 15px;
	color: ${props => props.color};
	margin-bottom: 10px;
	line-height: 20px;
	// margin-left: 15px;
	// text-align: center;
`

export const CardTitleCustom = styled.header`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 10px;
`


export const OuterContainer = styled.div`
	padding-bottom: 30vh;
	width: 70vw;
`