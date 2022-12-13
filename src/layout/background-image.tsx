import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import classNames from 'classnames/bind';
import * as styles from './background-image.module.scss';

const cx = classNames.bind(styles);

const BackgroundImage: React.FC = () => {
  return (
    <div className={cx('backgroundImageWrapper')}>
      <StaticImage
        className={cx('backgroundImage')}
        layout="fullWidth"
        alt=""
        src="../images/background.png"
        formats={['auto', 'webp', 'avif']}
      />
    </div>
  );
};

export default BackgroundImage;
