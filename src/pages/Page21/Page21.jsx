

import React, { Component } from 'react';

import ComplexProgressTable from './components/ComplexProgressTable';

import './Page21.scss';

export default class Page21 extends Component {
  static displayName = 'Page21';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page21-page">

        <ComplexProgressTable />


      </div>
    );
  }
}
