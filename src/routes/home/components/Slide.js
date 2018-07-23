import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import './Slide.css';
class componentName extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            sutoplay:true,
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1
            className:'silde',
          };
        return (
            <Slider {...settings}>
                <div>
                   <img clsassName="slide-img" src="/imgs/1.jpg"/>
                </div>
                <div>
                    <img clsassName="slide-img" src="/imgs/3.jpg"/>
                </div>
                <div>
                   <img clsassName="slide-img" src="/imgs/1.jpg"/>
                </div>
                <div>
                    <img clsassName="slide-img" src="/imgs/3.jpg"/>
                </div>
                <div>
                   <img clsassName="slide-img" src="/imgs/1.jpg"/>
                </div>
               
            </Slider>
        );
    }
}

componentName.propTypes = {

};

export default componentName;