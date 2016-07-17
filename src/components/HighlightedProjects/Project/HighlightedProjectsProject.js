import React from 'react';
var    FontAwesome = require('react-fontawesome');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HighlightedProjectsProject.scss';

function HighlightedProjectsProject() {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.image}>
          image
        </div>
        <div className={s.info}>
          <h3 className={s.title}>soon.is</h3>
          <h4 className={s.position}>// Front End Developer &amp; Designer</h4>
          <p className={s.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illum <strong>AngularJS</strong> nam pariatur porro quibusdam quos tempore! Ab accusantium magnam non numquam quam rerum sint ut. Atque laudantium porro sed voluptatibus.
          </p>
          <div className={s.links}>
            <a href="" className={s.link}>View Website</a>
            <a href="" className={s.link}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(HighlightedProjectsProject, s);
