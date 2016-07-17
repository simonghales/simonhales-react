import React from 'react';
var    FontAwesome = require('react-fontawesome');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HighlightedProjectsHeader.scss';

function HighlightedProjectsHeader() {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <h2 className={s.title}>Highlighted Projects</h2>
        <h3 className={s.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda, blanditiis.
        </h3>
      </div>
    </header>
  );
}

export default withStyles(HighlightedProjectsHeader, s);
