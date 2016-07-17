import React from 'react';
var    FontAwesome = require('react-fontawesome');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Info.scss';

function Info() {
  return (
    <section className={s.root}>
      <section className={s.infoSection}>
        <h3 className={s.title}>Work Experience</h3>
        <ul className={s.details}>
          <li>
            <div className={s.when}>
              2015 - Present
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Hydric Media</h4>
              <h5 className={s.infoSubtitle}>Front End Developer</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2015 - Present
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Hydric Media</h4>
              <h5 className={s.infoSubtitle}>Front End Developer</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2015 - Present
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Hydric Media</h4>
              <h5 className={s.infoSubtitle}>Front End Developer</h5>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Education &amp; Awards</h3>
        <ul className={s.details}>
          <li>
            <div className={s.when}>
              2015 - Present
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Hydric Media</h4>
              <h5 className={s.infoSubtitle}>Front End Developer</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2015 - Present
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Hydric Media</h4>
              <h5 className={s.infoSubtitle}>Front End Developer</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2015 - Present
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Hydric Media</h4>
              <h5 className={s.infoSubtitle}>Front End Developer</h5>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default withStyles(Info, s);
