import connect from 'react-redux/es/connect/connect';
import opD from '../ducks/movie';
import App from '../components/App';

const { postRequestToken } = opD.operations;

const mapStateToProps = (state) => ({
  movieData: state.movie.results || [],
});
const mapDispatchToProps = {
  postRequestToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
