import React from 'react';
var    FontAwesome = require('react-fontawesome');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Skills.scss';

function Skills() {
  return (
    <section className={s.root}>
      <div className={s.skillColumn}>
        <h3 className={s.title}>Languages &amp; Frameworks</h3>
        <ul className={s.skillsList}>
          <li>
            AngularJS
          </li>
          <li>
            ReactJS
          </li>
          <li>
            SASS + LESS
          </li>
          <li>
            Gulp + Grunt
          </li>
          <li>
            Bower + NPM
          </li>
          <li>
            ES6 / ES2015
          </li>
        </ul>
      </div>
      <div className={s.skillColumn}>
        <h3 className={s.title}>Roles &amp; Experience</h3>
        <ul className={s.skillsList}>
          <li>
            Front End
          </li>
          <li>
            Web Design
          </li>
          <li>
            Web Applications
          </li>
          <li>
            Responsive Design
          </li>
          <li>
            Unit &amp; E2E Testing
          </li>
          <li>
            Web Optimisation
          </li>
        </ul>
      </div>
    </section>
  );
}

export default withStyles(Skills, s);
