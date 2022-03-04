import React from 'react';
import { fetchByCode } from '../services/getCountryByCode';

class CountryDetails extends React.Component {
  constructor() {
    super()

    this.state = ({
      country: ''
    })
  }

  componentDidMount() {
    const { match: { params: { code } } } = this.props
    fetchByCode(code).then(([country]) => this.setState({ country }))
  }

  render() {
    const { country } = this.state
    
    return !country ? 'Carregando...' : (
      <>
        <h1>{country.name.official}</h1>
        <ul>
          <li>{`Name: ${country.name.common}`}</li>
          <li>{`Region: ${country.region}`}</li>
          <li>{`Capital: ${country.capital[0]}`}</li>
          <li>{`Population: ${country.population}`}</li>
          <li>{`Currency: ${country.currencies[Object.keys(country.currencies)[0]].name}`}</li>
        </ul>
        
      </>
    )
  }
}

export default CountryDetails;
