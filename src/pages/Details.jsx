import React from 'react';
import PropTypes from 'prop-types';

import { fetchByCode } from '../services/getCountryByCode';

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      country: '',
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { code },
      },
    } = this.props;
    fetchByCode(code).then(([country]) => this.setState({ country }));
  }

  render() {
    const { country } = this.state;

    const [currency] = Object.keys(country.currencies) || 'Press F to Pay respect';

    return !country ? (
      'Carregando...'
    ) : (
      <>
        <h1>{country.name.official}</h1>
        <ul>
          <li>{`Name: ${country.name.common}`}</li>
          <li>{`Region: ${country.region}`}</li>
          <li>{`Capital: ${country.capital[0]}`}</li>
          <li>{`Population: ${country.population}`}</li>
          <li>{`Currency: ${
            country.currencies[currency].name
          }`}
          </li>
        </ul>
      </>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string,
    })
  }).isRequired,
};

export default Details;
