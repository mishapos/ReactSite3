import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          React Site 1
        </h1>
        <h1>Last Updated 09/22/2020 01:51 PM</h1>
        <h4>{data.allFile.totalCount} Images</h4>
        {data.allFile.edges.map(({ node }) => (
          <div key={node.name}>
            <Link
              to={node.name}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.name}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.prettySize}
                </span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(sort: { fields: name }) {
      edges {
        node {
          name
          prettySize
        }
      }
      totalCount
    }
  }
`
