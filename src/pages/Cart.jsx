import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Anouncement from '../components/Anouncement/Anouncement'
import Footer from '../components/footer/Footer'


const Container=styled.div``
const Wrapper=styled.div`
padding: 20px;
text-align: center;
`
const Title=styled.h1``
const Top=styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;`

const TopBottom=styled.button`
padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color:white;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" && "black"};
    color: ${(props)=>props.type === "filled" && "white"};


`
const TopTexts=styled.div``
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`


const Bottom=styled.div`
display: flex;
    justify-content: space-between;
`
 const Info=styled.div`
 width
 flex: 3;
 `
const Summery=styled.div`
flex: 1;
`
// const Container=styled.div``


const Cart = () => {
  return (
    <Container>
      <Anouncement/>
      <Navbar/>
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopBottom>Coontinue Shopping</TopBottom>
          <TopTexts>
            <TopText>shopping bag(2)</TopText>
            <TopText>Whatch lists(2)</TopText>

          </TopTexts>
          <TopBottom type='filled'>Checkout Now</TopBottom>

        </Top>
        <Bottom>
          <Info>
            info
          </Info>
          <Summery>
            summery
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart