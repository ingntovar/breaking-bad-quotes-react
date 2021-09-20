import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Quote from "./components/Quote"

function App() {
  const [theQuote, setQuote] = useState({})

  const obtainQuote = async () => {
    const quoteRequest = await fetch("https://www.breakingbadapi.com/api/quote/random")
    const quoteJson = await quoteRequest.json()
    setQuote(quoteJson[0])
  }

  useEffect(() => {
    obtainQuote()
  }, [])

  return (
    <>
      <Container>
        <Quote theQuote={theQuote} />
        <Button onClick={obtainQuote}>Obtener Frase</Button>
      </Container>
    </>
  )
}

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

export default App
