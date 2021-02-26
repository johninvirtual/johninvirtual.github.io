import React from "react"
import { Link } from "gatsby"

import "../styles/global.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>John in Virtual</h1>
    <p>Welcome to johninvirtual.com | currently in construction.</p>
    <p>Please visit my blog <a href="https://blog.johninvirtual.com" rel="blog">here</a></p>
    <div>
      <Image />
    </div>
    <Link to="/about/">About</Link> <br />
  </Layout>
)

export default IndexPage
