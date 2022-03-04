import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountryCard extends Component {
  render() {
    const {
      name,
      imgUrl,
      capital,
      code,
    } = this.props;
    return (
      <div className="card" style={ {width: '18rem;'} }>
        <img src={ imgUrl } alt={ name } className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Capital: {capital}</p>
          <Link to={ `/country/${code}` } className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    );
  }
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
