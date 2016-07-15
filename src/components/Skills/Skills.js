import React from 'react';
var    FontAwesome = require('react-fontawesome');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Skills.scss';

function Skills() {
  return (
    <section className={s.root}>
      <div>
        <h3 className={s.authorTitle}>Simon Hales</h3>
        <h1 className={s.mainTitle}>Front End Developer</h1>
        <h2 className={s.subTitle}>specialised in <strong>AngularJS</strong> and <strong>ReactJS</strong></h2>
        <h4 className={s.contactLinks}>
          <a className={s.social} href="">
            <FontAwesome name='twitter' />
          </a>
          <a className={s.social} href="">
            <FontAwesome name='linkedin' />
          </a>
          <a className={s.social} href="">
            <FontAwesome name='github' />
          </a>
          <a className={s.email} href="mailto:simonghales@gmail.com">simonghales@gmail.com</a>
        </h4>
      </div>
    </section>
  );
}

export default withStyles(Skills, s);
