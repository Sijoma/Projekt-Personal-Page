import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

import { bpMaxSM } from '../lib/breakpoints';
import Container from './Container';
import SubscribeForm from './Forms/Subscribe';
import { GitHub, LinkedIn, Twitter } from './Social';

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      {!noSubscribeForm && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div css={css`
            font-size: 60%;
            opacity: 0.6;
          `}>
          <Link to="/legal" aria-label="View page">Legal Notice & Privacy Policy</Link>
        </div>
        <div>
          <Twitter />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
