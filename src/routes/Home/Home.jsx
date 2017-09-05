import { connect } from 'react-redux';
import Component from '../../components/Home';

const mapStateToProps = state => ({
  projects: state.project.items,
});

const Home = connect(
  mapStateToProps,
)(Component);

export default Home;
