import React from 'react';
import PropTypes from 'prop-types';

import getCountriesByName from '../services/getCountriesByName';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.setCountriesByName = this.setCountriesByName.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, this.setCountriesByName);
  }

  async setCountriesByName() {
    const { setCountries } = this.props;
    const { query } = this.state;

    const NOT_FOUND_STATUS_CODE = 404;
    const countries = await getCountriesByName(query);

    if (countries.status === NOT_FOUND_STATUS_CODE) {
      setCountries([]);
      return;
    }

    setCountries(countries);
  }

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={ this.getCountriesByName }>
        <label htmlFor="query">
          <input
            type="text"
            name="query"
            id="query"
            aria-label="query"
            placeholder="Country Name..."
            value={ query }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  setCountries: PropTypes.func.isRequired,
};

export default SearchBar;
