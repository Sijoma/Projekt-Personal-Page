import { css } from '@emotion/core';
import { darken, lighten } from 'polished';
import React from 'react';
import { Helmet } from 'react-helmet';

import { bpMaxSM, bpMinLG, bpMinSM } from '../../lib/breakpoints';
import { useTheme } from './../Theming';
import PortfolioSection from './components/portfolioSection';
import Header from './Header/header';
import Interests from './interests';
import Languages from './languages';
import References from './references';
import Skills from './skills';

// console.log('@@ styles:', styles);

const Resume = ({ resume }) => {
  const theme = useTheme()
  const { basics, work, volunteer, education, awards, publications, skills, languages, interests, references } = resume;
  return (
    <React.Fragment>
      <Helmet>
        <title>{basics.name} - CV</title>
        <meta name="description" content={`resume for ${basics.name}`} />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous"></link>
      </Helmet>
        <div id="resume" css={css`
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            vertical-align: baseline;
          }

          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }

          body {
            line-height: 1;
          }

          ol,
          ul {
            list-style: none;
          }

          li {
            list-style-type: square;
            list-style-position: outside;
            margin-left: 1.3em;
          }

          blockquote,
          q {
            quotes: none;
          }

          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: none;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          /****************
          *	COMMONS
          ****************/

          blockquote {
            margin-bottom: 1em;
          }

          /* every section wrapper */

          .section {
            margin-bottom: 1rem;
          }

          section .location {
            margin-right: 0.5em;
            color: ${lighten(0.25, theme.colors.text)};
            font-weight: 700;
          }

          #contact {
            margin-top: 0.5rem;
          }

          #profiles .item {
            padding: 0;
          }

          #header > #profiles,
          #header > #contact,
          #skills,
          #languages,
          #interests {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-flow: row wrap;
            flex-flow: row wrap;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
          }

          #header > div {
            line-height: 1.5;
          }

          #header > div > div {
            margin-right: 1.2em;
          }

          #header h1.name {
            font-size: 2.8rem;
            font-weight: 100;
            line-height: 100%;
          }

          #header h2.label {
            color: ${lighten(0.15, theme.colors.text)};
            font-size: 1.47rem;
            font-weight: 300;
          }

          #header .image {
            width: 15em;
            float: right;
            border-radius: 4px;
          }

          /****************
           *	CUSTOM for small header image 
           ****************/
          ${bpMaxSM}{
            #header .image {
              display: inline-block;
              width: 100%;
              height: 300px;
              margin-bottom: 8px;
            }
          }

          .main-summary {
            background: ${theme.colors.primary};
            padding: 1.2em 1em;
            margin-top: 1rem;
          }

          .main-summary p {
            margin: 0;
            color: ${theme.colors.invertedText};
          }

          .section-title {
            display: inline-block;
            background: ${theme.colors.invertedText};
            padding: 0 1em 0.3em 0;
            color: ${theme.colors.text};
            text-transform: uppercase;
            font-weight: 600;
            border: none;
            font-size: 0.9rem;
          }

          .section > header {
            position: relative;
          }

          .fa {
            margin-right: 0.25em;
          }

          .section > header::after {
            position: absolute;
            left: 0;
            top: 0.7em;
            height: 1px;
            background: #ccc;
            content: "";
            width: 100%;
            z-index: -100;
            display: block;
          }

          .section.main-summary > section {
            margin: 0;
          }

          div.summary {
            margin-top: 0.7em;
          }

          .section > section > header {
            font-size: 1.38rem;
            position: relative;
            margin-top: 0.7em;
          }

          .section > section > header:first-of-type {
            margin: 0;
          }

          .section > section > header .space-left {
            position: absolute;
            left: -1.56rem;
            top: 5px;
            color: #aaa;
            line-height: 1;
            opacity: 0;
          }

          .position,
          .company,
          .organization,
          .institution,
          .date,
          .area,
          .studyType,
          .title,
          .awarder {
            display: inline;
          }

          .position,
          .studyType,
          .area,
          .title,
          .language,
          .name {
            font-weight: 600;
          }

          .company::before,
          .institution::before,
          .organization::before,
          .awarder::before {
            content: " at ";
          }

          .company,
          .institution,
          .organization,
          .awarder {
            color: ${darken(0.20, theme.colors.text)};
            font-weight: 400;
          }

          .section header .date {
            display: block;
            font-size: 1rem;
            padding: 0.1em 0;
            font-weight: 400;
          }

          .keywords,
          .courses {
            margin: 0.5em 0;
          }

          .keywords li,
          .courses li {
            display: inline-block;
            margin: 2px 2px 2px 0;
            padding: 4px 5px 5px;
            font-size: 0.9rem;
            line-height: 1;
            color: ${theme.colors.invertedText};
            background-color: ${lighten(0.3,theme.colors.text)};
            border: 0 solid ${theme.colors.text};
            white-space: nowrap;
          }

          .keywords li:hover,
          .courses li:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.invertedText};
          }

          .highlights {
            margin: 1em 0 0 0;
          }

          .highlights > li > p {
            margin-bottom: 0.5em;
          }

          .item {
            overflow: hidden;
          }

          .gpa {
            clear: both;
            padding-bottom: 0.5em;
          }

          .fa.social {
            font-size: 1.1em;
          }

          /* Social Media Brand Colors */

          .google-plus {
            color: #dd4b39;
          }

          .tumblr {
            color: #32506d;
          }

          .foursquare {
            color: #0072b1;
          }

          .facebook {
            color: #3b5998;
          }

          .linkedin {
            color: #007bb6;
          }

          .pinterest {
            color: #cb2027;
          }

          .dribbble {
            color: #ea4c89;
          }

          .instagram {
            color: #517fa4;
          }

          .twitter {
            color: #00aced;
          }

          .soundcloud {
            color: #ff3a00;
          }

          .wordpress {
            color: #21759b;
          }

          .youtube {
            color: #bb0000;
          }

          .github {
            color: ${theme.colors.text};
          }

          .stack-overflow {
            color: #828386;
            position: relative;
          }

          .flickr {
            color: #ff0084;
          }

          .reddit {
            color: #ff4500;
          }

          .hacker-news {
            color: #ff6600;
          }

          .stack-overflow::after {
            position: absolute;
            left: 0;
            content: "\f16c";
            color: #f68a1f;
            overflow: hidden;
            height: 100%;
          }

          .telegram {
            color: #2291c3;
          }

          #languages .item,
          #skills .item,
          #interests .item {
            width: 15em;
            padding: 0 0.5em 0.5em 0;
            border-bottom: none;
          }

          #skills .item {
            width: 16em;
          }

          #skills .item .keywords {
            width: 15em;
          }

          /* Skill chart */

          .level {
            margin-bottom: 0.5em;
          }

          .level em {
            padding-left: 0.2em;
          }

          .level .bar {
            border: 1px solid #ddd;
            display: block;
            width: 10em;
            height: 5px;
            position: relative;
          }

          .level .bar::after {
            position: absolute;
            content: " ";
            top: 0;
            left: 0;
            background: black;
            height: 5px;
          }

          .level.beginner .bar::after {
            background: #eb5f51;
            width: 2.5em;
          }
          .level.intermediate .bar::after {
            background: #ffdf1f;
            width: 6.5em;
          }
          .level.advanced .bar::after,
          .level.fluent .bar::after {
            background: #59c596;
            width: 7.5em;
          }
          .level.master .bar::after,
          .level.native.speaker .bar::after {
            background: #5cb85c;
            width: 10em;
          }

          #references .item {
            padding-left: 0.5em;
            border-left: 5px solid ${theme.colors.primary};
          }

          .toggle-item {
            display: none;
          }

          .section > section > section {
            margin-bottom: 0.5rem;
          }

          /******************
          *	HELPER CLASSES
          ******************/

          .clear::after {
            content: "";
            display: table;
            clear: both;
          }
          .header-left {
            cursor: pointer;
          }

          .display {
            display: block;
            opacity: 1 !important;
          }

          /****************
          *		TABLET
          ****************/

          ${bpMinSM} {
            #resume {
              width: 80%;
              margin: 0 auto;
            }
            .section header .date {
              float: right;
              font-weight: 600;
            }
          }


          /****************
          *		LAPTOP
          ****************/

          ${bpMinLG} {
            li {
              margin-left: 1.5em;
            }
            #resume {
              width: 820px;
              margin: 2rem auto;
            }
            .section > section > header .space-left {
              opacity: 1;
              cursor: pointer;
            }
            .section > section:not(.main-summary) {
              margin-left: 1.67rem;
            }
            .toggle-item {
              transform: translate(-9999px);
            }
            .toggle-item + label {
              display: block;
            }
            .toggle-item:checked + label:after {
              content: "\f0d7";
            }
            .toggle-item + label:after {
              float: left;
              cursor: pointer;
              margin-left: -20px;
              color: #aaa;
              font-size: 16px;
              font-weight: 900;
              font-family: "Font Awesome 5 Free";
              content: "\f0da";
            }
            .toggle-item ~ .item {
              height: 0;
              opacity: 0;
            }
            .toggle-item:checked ~ .item {
              height: auto;
              opacity: 1;
              transition: all 0.5s linear;
            }
            .company::before,
            .institution::before,
            .organization::before,
            .awarder::before {
              content: " | ";
            }
            .header-left {
              float: left;
              width: 70%;
              word-break: normal;
            }
            .section header .date {
              padding: 0.2em;
            }
            .display {
              display: none;
            }
            .display:not(.none) {
              display: block;
            }
          }

          @media print {
            #resume {
              margin: 0.1em;
              padding: 0.1em;
              -ms-word-wrap: break-word;
              word-wrap: break-word;
              line-height: 1.25;
            }
            @page {
              margin: 1cm 1.4cm;
            }
            .item-count {
              display: none;
            }
            .company::before,
            .institution::before,
            .organization::before,
            .awarder::before {
              content: " at ";
            }
            .main-summary {
              padding: 0;
              background: transparent;
            }
            .section {
              margin: 0.8rem 0;
              padding: 0;
            }
            .section header {
              padding-bottom: 0.15rem;
            }
            .section .location {
              padding-bottom: 0.15rem;
            }
            .section > section > section {
              margin: 0 0 1em 0;
            }
            .section > section > section:last-of-type {
              margin: 0;
            }
            .stack-overflow::after {
              content: "";
            }
            .fa.social {
              color: #828386;
            }
            ul {
              margin-top: 0.4em;
            }
            ul,
            li {
              padding: 0;
            }
            ul.keywords::before,
            ul.courses::before {
              font-size: 0.8rem;
              font-weight: 600;
            }
            #skills .item {
              width: calc(100% / 3);
              padding: 0;
            }
            .highlights {
              margin: 0.5em 0 0 0;
            }
            ul.keywords::before {
              content: "Skills acquired: ";
            }
            #skills .keywords::before {
              content: none;
            }
            .section p {
              margin: 0;
              padding: 0;
            }
            ul.courses::before {
              content: "Major courses: ";
            }
            ul.keywords li:last-of-type::after,
            ul.courses li:last-of-type::after {
              content: "";
            }
            .level em {
              font-style: normal;
              padding: 0.1em 0;
            }
            .level .bar {
              display: none;
            }
            #profiles .item {
              padding: 0;
            }
            .item.display {
              display: block;
              opacity: 1 !important;
            }
            .fa-map-marker-alt:before {
              padding-left: 0.1em;
            }
          }

        `}>
          <Header basics={basics} />
          <PortfolioSection items={work} />
          <PortfolioSection 
            items={volunteer} 
            heading="Volunteer"
            id="volunteer"
            />
          <PortfolioSection 
            items={education}
            heading="Education"
            id="education" />
          
          <PortfolioSection 
            items={awards}
            heading="Awards" 
            id="awards"/>
            
          <PortfolioSection items={publications} 
            heading="Publications"
            id="publications"
            />
          <Skills skills={skills} />
          <Languages languages={languages} />
          <Interests interests={interests} />
          <References references={references} />
        </div>
    </React.Fragment>
  );
};

export default Resume;
