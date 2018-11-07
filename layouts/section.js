import React from 'react'
import styled, { css } from 'styled-components'

import Center from '../components/center';
import Stripes from '../components/stripes';
import colors from '../colors'

const Container = styled(Center)`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${props => (props.inverted ? colors.text : 'white')};
  ${props =>
    css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      li,
      p {
        color: ${props.inverted ? 'white' : colors.text};
      }
    `};
`

const StripeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export default function Section({ children, inverted, ...rest }) {
  return (
    <Container inverted={inverted} {...rest}>
      <StripeContainer>
        <Stripes inverted={inverted} />
      </StripeContainer>
      {children}
    </Container>
  )
}