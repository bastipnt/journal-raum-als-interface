import React from "react";
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql } from "gatsby";

import classNames from "classnames/bind";
import * as styles from "./page-layout.module.scss";

const cx = classNames.bind(styles);

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "de",
        }}
      >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Helmet>
      <header className={cx("header")}>
        <div className={cx("headerContainer")}>
          <h1 className={cx('pageTitle')}>Raum als Interface</h1>
          <b className={cx('muted')}>Sebastian Paintner</b>
        </div>
      </header>

      <main className={cx("main")}>
        <div className={cx("mainContainer")}>{children}</div>
      </main>

      <footer className={cx("footer")}>
        <div className={cx("footerContainer")}>
          2022&nbsp;•&nbsp;Sebastian Paintner&nbsp;•&nbsp;UDK Matrikelnummer:&nbsp;4044970
        </div>
      </footer>
    </>
  );
};

export default Layout;
