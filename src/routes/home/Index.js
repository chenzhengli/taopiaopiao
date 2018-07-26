import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import Slider from './components/Slide';
import MovieItems from './components/MovieItems';
import TabMenu from '../../components/TabMenu';
import RenderToBody from '../../components/RenderToBody';
import CityLayer from './components/CityLayer';
import request from '../../helpers/request';
import './Index.css';
class Index extends Component {
  showCityLayer=()=>{
    console.log("9999");
  }

  componentDidMount(){
    this.getData();
  }
  getData=async()=>{
    const data=await request("/movieList");
    console.log(11111,data);
  }

  render() {
    return (
      <div className="home">
        <TopBar city="杭州" showCityLayer={this.showCityLayer}/>
        <div className="home-slide">
          <div className="home-slideWrapper">
           <Slider data={['/imgs/1.png','/imgs/2.png','/imgs/1.png','/imgs/2.png']}></Slider>
          </div>
        </div>
        <ul className="home-movieItems">
          <li><MovieItems/></li>
          <li><MovieItems/></li>
          <li><MovieItems/></li>
          <li><MovieItems/></li>
        </ul>
        <TabMenu current={"movie"}></TabMenu>
        <RenderToBody><CityLayer/></RenderToBody>
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
