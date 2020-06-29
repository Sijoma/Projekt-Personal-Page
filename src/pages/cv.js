import Layout from 'components/Layout';
import { graphql } from 'gatsby';
import React from 'react';

import Container from '../components/Container';
import Resume from '../components/Resume/resume';

export default function Index({ data: { site, resumeJson } }) {
  return (
    <Layout site={site} noSubscribeForm="true">
      <Container>
      <Resume
        resume={resumeJson}
      />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    resumeJson {
      basics {
        email
        name
        label
        phone
        website
        summary
        picture
        profiles {
          network
          url
          username
        }
        location {
          address
          city
          countryCode
          postalCode
          region
        }
      }
      work {
        endDate(formatString: "MMM, YYYY")
        highlights
        company
        startDate(formatString: "MMM, YYYY")
        position
        summary
        website
      }
      awards {
        awarder
        date(formatString: "DD, MMMM, YYYY")
        summary
        title
      }
      volunteer {
        endDate(formatString: "MMM, YYYY")
        highlights
        organization
        position
        startDate(formatString: "MMM, YYYY")
        summary
        website
      }
      education {
        area
        endDate(formatString: "MMM, YYYY")
        gpa
        institution
        startDate(formatString: "MMM, YYYY")
        studyType
      }
      publications {
        name
        publisher
        releaseDate(formatString: "MMM, YYYY")
        summary
        website
      }
      skills {
        keywords
        level
        levelDisplay
        name
      }
      languages {
        fluency
        language
      }
      interests {
        keywords
        name
      }
      references {
        name
        reference
      }
    }
  }
`
