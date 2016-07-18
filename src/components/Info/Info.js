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
              2013 - 2014
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>Happen</h4>
              <h5 className={s.infoSubtitle}>Lead Designer &amp; Front End Developer</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2013 - 2015
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>University of Queensland</h4>
              <h5 className={s.infoSubtitle}>Head Web Design Tutor</h5>
            </div>
          </li>
        </ul>
      </section>
      <section className={s.infoSection}>
        <h3 className={s.title}>Education &amp; Awards</h3>
        <ul className={s.details}>
          <li>
            <div className={s.when}>
              2011 - 2014
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>University of Queensland</h4>
              <h5 className={s.infoSubtitle}>Bachelor of Multimedia Design</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2013
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>UQ ITEE Outstanding Tutor Award</h4>
              <h5 className={s.infoSubtitle}>DECO1400 (Introduction to Web Design)</h5>
            </div>
          </li>
          <li>
            <div className={s.when}>
              2013
            </div>
            <div className={s.info}>
              <h4 className={s.infoTitle}>UQ ITEE Best User Centered Design Project</h4>
              <h5 className={s.infoSubtitle}>HTML THOR</h5>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default withStyles(Info, s);
