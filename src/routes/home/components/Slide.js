import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slide.css';
class componentName extends Component {
   constructor(props){
       super(props);
       this.state={
           data:[],
       }
   }
   componentWillReceiveProps(props){
        if(!this.state.data.length>0){
            this.setState({
                data:props.data,
            })
        }
   }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            dotsClass:'slide-dots',
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1
            className:'silde',
          };
        return (
            <Slider {...settings}>
                {this.state.data.map((value,index)=>{
                    return <div key={index}>
                                <img className="slide-img" src={value}/>
                            </div>
                })}
            </Slider>
        );
    }
}
export default componentName;