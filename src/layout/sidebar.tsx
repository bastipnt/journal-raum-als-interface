import React from 'react';
import { Link } from 'gatsby';

import classNames from 'classnames/bind';
import * as styles from './sidebar.module.scss';

import { getTagLink } from '../helpers/tags-helper';

const cx = classNames.bind(styles);

type Props = {
  pageContext: {
    page?: string;
    tags?: string[];
    tag?: string;
  };
};

const Sidebar: React.FC<Props> = ({ pageContext }) => {
  return (
    <section className={cx('sidebar')}>
      <div className={cx('linkGroup')}>
        <Link
          className={cx('link', { active: pageContext.page === 'project1' })}
          to="/project1"
        >
          Project&nbsp;1
        </Link>
        <Link
          className={cx('link', { active: pageContext.page === 'project2' })}
          to="/"
        >
          Project&nbsp;2
        </Link>
      </div>

      {pageContext.tags && (
        <ul className={cx('tagsList')}>
          {pageContext.tags.map((tag) => (
            <li className={cx('tagLink')} key={tag}>
              <Link
                className={cx('link', { active: pageContext.tag === tag })}
                to={getTagLink(pageContext.page, tag)}
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Sidebar;
