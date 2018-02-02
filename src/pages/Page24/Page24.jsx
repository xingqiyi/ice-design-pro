

import React, { Component } from 'react';

import BrandDisplay from './components/BrandDisplay';

import InfoDisplayTab111 from './components/InfoDisplayTab111';

import UserInfoCard from './components/UserInfoCard';

import PriceCard from './components/PriceCard';

import PriceInfo from './components/PriceInfo';

import DownloadCard from './components/DownloadCard';

import LeftContentDisplay from './components/LeftContentDisplay';

import './Page24.scss';

export default class Page24 extends Component {
  static displayName = 'Page24';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page24-page">

        <BrandDisplay />

        <InfoDisplayTab111 />

        <UserInfoCard />

        <PriceCard />

        <PriceInfo />

        <DownloadCard />

        <LeftContentDisplay />

      </div>
    );
  }
}
