

import React, { Component } from 'react';

import FilterList from './components/FilterList';

import './Page23.scss';

export default class Page23 extends Component {
  static displayName = 'Page23';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page23-page">

        <FilterList />

      </div>
    );
  }
}
