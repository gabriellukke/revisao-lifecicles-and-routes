import React, { Component } from 'react';
import getAllCountries from '../services/getAllCountries';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    this.handleCountrySet = this.handleCountrySet.bind(this);
  }

  componentDidMount() {
    getAllCountries().then((countries) => {
      this.setState({
        countries
      });
    });
  }

  handleCountrySet(newCountries) {
    this.setState({
      countries: newCountries
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
        <SearchBar setCountries={ this.handleCountrySet } />
        <div className="container">
          <div className="row">
            {countries.map((country) => (
              <div key={ country.name.common } className='col-3'>
                <CountryCard
                  name={ country.name.common }
                  imgUrl={ country.flags.png }
                  capital={ country.capital }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
