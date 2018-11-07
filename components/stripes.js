import React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StripeContainer = styled.div`
  height: 100vh;
  width: 25vw;
  position: relative;
`

const Stripe = styled.div`
  width: 10vw;
  height: 100vw;
  transform: rotate(10deg);
`

function Stripes({inverted}) {
  let stripes = inverted ? [colors.darkOrange, colors.orange] : [colors.grey, colors.lightGrey];
  return(
    <Container>
      <StripeContainer>
        <Stripe style={{backgroundColor: stripes[0], left:'50%'}}/>
        <Stripe style={{backgroundColor: stripes[1], right: '20%'}}/>
      </StripeContainer>
    </Container>
  )
}

export default Stripes;