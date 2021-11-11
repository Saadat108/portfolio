import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>Hello from about page</h1>
        <p className={text}>lorem ipsum dfj fds;kljsdf fj;aklsdfa fsda;klj</p>
      </div>

      <Wrapper>
        <h1>about page, inside Wrapper</h1>
        <h1>Hello from about page, Wrapper section</h1>
        <p className="text">lorem ipsum dfj fds;kljsdf fj;aklsdfa fsda;klj</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: teal;
  border: 2px solid black;
  h1 {
    color: aquamarine;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
