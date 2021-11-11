import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <h2>index page stargs</h2>
      <div className={page}>
        <h1>Home page</h1>
        <p className={text}>lorem ipsum dfj fds;kljsdf fj;aklsdfa fsda;klj</p>
      </div>

      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      <h2>index page ends</h2>
    </Layout>
  )
}
