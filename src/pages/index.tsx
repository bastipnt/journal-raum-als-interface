import React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";

import classNames from "classnames/bind";
import * as styles from "./index.module.scss";

const cx = classNames.bind(styles);

type Props = {
  data: any;
};

const Index: React.FC<Props> = ({ data: { allMarkdownRemark } }) => (
  <>
    {allMarkdownRemark.nodes.map(({ frontmatter, html }: any) => (
      <div>
        <div>
          <h1 className={cx("postTitle")}>{frontmatter.title}</h1>
          <small className={cx("postData")}>{frontmatter.date} - {frontmatter.location}</small>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    ))}
  </>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
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
