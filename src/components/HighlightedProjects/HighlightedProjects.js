import React from 'react';
var    FontAwesome = require('react-fontawesome');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import HighlightedProjectsHeader from './Header/HighlightedProjectsHeader.js';
import HighlightedProjectsProject from './Project/HighlightedProjectsProject.js';

import s from './HighlightedProjects.scss';

function HighlightedProjects() {
  return (
    <section className={s.root}>
      <HighlightedProjectsHeader />
      <section>
        <HighlightedProjectsProject />
        <HighlightedProjectsProject />
        <HighlightedProjectsProject />
      </section>
    </section>
  );
}

export default withStyles(HighlightedProjects, s);
