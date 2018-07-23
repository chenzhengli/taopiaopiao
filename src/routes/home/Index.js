import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import Slider from './components/Slide';
import './Index.css';
class Index extends Component {
  showCityLayer=()=>{
    console.log("9999");
  }
  render() {
    return (
      <div className="home">
        <TopBar city="杭州" showCityLayer={this.showCityLayer}/>
        <div className="home-slide">
          <div className="home-slideWrapper">
           <Slider></Slider>
          </div>
         
        </div>
        
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
