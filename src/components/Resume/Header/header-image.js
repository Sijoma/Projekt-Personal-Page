import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';


export default function HeaderImage() {
    const data = useStaticQuery(graphql`
      query {
        allFile(filter: {relativePath: {eq: "profile.jpg"}}) {
            nodes {
              childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
      }
    `)
    return <Img className="image"
      sizes={data.allFile.nodes[0].childImageSharp.fluid} />
  }