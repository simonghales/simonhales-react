/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className={s.root}>
      <nav className={s.nav}>
        <div className={s.navGrouping}>
          <a href="" className={s.active}>Portfolio</a>
          <a href="">About &amp; Contact</a>
          <span className={s.divider}>//</span>
        </div>
        <div className={s.navGrouping}>
          <a href="">Blog</a>
          <span className={s.divider}>//</span>
        </div>
      </nav>
    </header>
  );
}

export default withStyles(Header, s);
