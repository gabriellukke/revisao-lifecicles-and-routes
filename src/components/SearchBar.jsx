import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCountriesByName = this.getCountriesByName.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async getCountriesByName() {
    const { setCountries } = this.props;
    const { query } = this.state;
    const countries = await this.getCountriesByName(query);
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
        <button
          type="submit"
        >
          Buscar
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  setCountries: PropTypes.func.isRequired,
};

export default SearchBar;
