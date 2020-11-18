import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ImagePage({ data }) {
  const post = data.file
  return (
    <Layout>
      <div>
        <p>From Site 1</p>
        <img src={post.publicURL} alt="NASA space" />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($name: String!) {
    file(name: { eq: $name }) {
      id
      publicURL
    }
  }
`
