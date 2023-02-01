import React from 'react';

import Sidebar from './sidebar';
import BackgroundImage from './background-image';

import classNames from 'classnames/bind';
import * as styles from './page-layout.module.scss';
import { HeadFC } from 'gatsby';

const cx = classNames.bind(styles);

type Props = {
  children: any;
  pageContext: {
    page?: string;
  };
};

const Layout: React.FC<Props> = ({ children, pageContext }) => {
  return (
    <>
      <Sidebar pageContext={pageContext} />

      <BackgroundImage />

      <main className={cx('main')}>
        <div className={cx('mainContainer')}>{children}</div>
      </main>

      <footer className={cx('footer')}>
        <div className={cx('footerContainer')}>
          2022&nbsp;•&nbsp;Basti,&nbsp;Milli,&nbsp;Aron
        </div>
      </footer>
    </>
  );
};

export default Layout;
