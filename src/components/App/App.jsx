import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './App.css';
// import Table from '../Table';
// import MovieObject from '../../model/MovieObject';


class App extends Component {
  constructor(props) {
    super(props);
    this.props.postRequestToken(); // eslint-disable-line react/destructuring-assignment
  }

  render() {
    return (
      <div className="App">
        {/* <Table movieData={movieData} /> */}
        <Button bsStyle="primary">Button to pull data</Button>
      </div>
    );
  }
}

App.propTypes = {
  postRequestToken: PropTypes.func.isRequired,
  // movieData: PropTypes.arrayOf(MovieObject).isRequired,
};

export default App;
