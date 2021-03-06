import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  handleInputChange = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { fetchWeather } = this.props;
    const { searchTerm } = this.state;

    fetchWeather(searchTerm);

    this.setState({ searchTerm: '' });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorites cities"
          className="form-control"
          value={searchTerm}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
