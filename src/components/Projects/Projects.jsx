import { connect } from 'react-redux';
import Component from './Projects.component';

const mapStateToProps = state => ({
  items: state.projects.items,
});

const Projects = connect(
  mapStateToProps,
)(Component);

export default Projects;
