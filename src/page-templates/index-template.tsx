import React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import classNames from 'classnames/bind';
import * as styles from './index-template.module.scss';

const cx = classNames.bind(styles);

type Props = {
  data: any;
  pageContext: {
    page?: string;
  };
};

const Index: React.FC<Props> = ({
  data: { allMarkdownRemark },
  pageContext,
}) => {
  return (
    <>
      <h1 className={cx('pageTitle')}>
        Raum als Interface -{' '}
        {pageContext.page === 'project1' ? `Project\u00A01` : `Project\u00A02`}
      </h1>
      {allMarkdownRemark.nodes.map(({ frontmatter, html }: any) => {
        const image = getImage(
          frontmatter.image?.childImageSharp?.gatsbyImageData
        );

        return (
          <div className={cx('post')} key={frontmatter.slug}>
            <div className={cx('titleContainer')}>
              <span>{frontmatter.week}</span>
              <span><strong>{frontmatter.title}</strong></span>
              <span className={cx('date')}>{frontmatter.date}</span>
            </div>

            <div className={cx('contentContainer')}>
              <div>
                {image && (
                  <GatsbyImage
                    image={image}
                    alt="featured image"
                    objectFit="contain"
                    objectPosition="left top"
                  />
                )}

                <p>{frontmatter.description}</p>
              </div>

              <div
                className={cx('postContainer')}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export const pageQuery = graphql`
  query IndexQuery($tagsRegex: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { tags: { regex: $tagsRegex } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          location
          slug
          title
          week
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
        html
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <html lang="en"></html>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
    <title>Journal - Raum als Interface</title>
  </>
);

export default Index;
