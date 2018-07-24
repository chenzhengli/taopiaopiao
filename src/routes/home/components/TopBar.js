import React, {Component} from 'react';
import propTypes from 'prop-types';
import './TopBar.css';

const TopBar=({city,showCityLayer})=>{
  return (
    <div className="topBar">
      <div className="topBar-city" onClick={showCityLayer}>{city}</div>
      <div className="topBar-search"></div>
      <div className="topBar-scan"></div>
    </div>
  );
};
TopBar.propTypes={
  city:propTypes.string.isRequired,
  showCityLayer:propTypes.func.isRequired,
};
export default TopBar;
