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
const path=require("path");
console.log(9091090,path.resolve("routes"));
class Index extends Component {
  state={
    city:'',
    poster:[],
    movies:[],
    isShowCityLayer:false,
  }
  showCityLayer=()=>{
    this.setState({
      isShowCityLayer:true,
    })
  }

  componentDidMount(){
    this.getData();
  }
  getData=async()=>{
    const data=await request("/movieList");
    const {city,poster,movies}=data;
    this.setState({
      city,
      poster,
      movies,
    })

  }

  render() {
    const {city,movies,poster,isShowCityLayer}=this.state;
    return (
      <div className="home">
        <TopBar city={city}  showCityLayer={this.showCityLayer}/>
        <div className="home-slide">
          <div className="home-slideWrapper">
           <Slider data={poster}></Slider>
          </div>
        </div>
        <ul className="home-movieItems">
          {movies.map((value,index)=>{
            return  <li key={value.id+Math.random()}><MovieItems item={value}/></li>
          })}
        </ul>
        <TabMenu current={"movie"}></TabMenu>
        { isShowCityLayer?<RenderToBody><CityLayer/></RenderToBody>:null}
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
