import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>Hello from about page</h1>
        <p className={text}>lorem ipsum dfj fds;kljsdf fj;aklsdfa fsda;klj</p>
      </div>
    </Layout>
  )
}

export default about
