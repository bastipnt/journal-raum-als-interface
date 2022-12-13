import React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';

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
}) => (
  <>
    <h1 className={cx('pageTitle')}>
      Raum als Interface -{' '}
      {pageContext.page === 'project1' ? `Project\u00A01` : `Project\u00A02`}
    </h1>
    {allMarkdownRemark.nodes.map(({ frontmatter, html }: any) => (
      <div className={cx('post')} key={frontmatter.slug}>
        <div className={cx('titleContainer')}>
          <h2 className={cx('postTitle')}>{frontmatter.title}</h2>
          <small className={cx('postData')}>
            {frontmatter.date} - {frontmatter.location}
          </small>
        </div>
        <div
          className={cx('postContainer')}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    ))}
  </>
);

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
        }
        html
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Journal - Raum als Interface</title>;

export default Index;
