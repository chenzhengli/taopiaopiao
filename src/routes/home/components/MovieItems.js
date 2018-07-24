import React, { Component, PropTypes } from 'react';
import './MovieItems.css';

class MovieItems extends Component {
    render() {
        return (
            <div>
                <div className="movieItems">
                    <div className="movieItems-poster">
                            <img  src="/imgs/movies/m1.png"/>
                    </div>
                    <div className="movieItems-detail">
                            <div className="movieItems-name">摩天营救</div>
                            <div className="movieItems-score">观众评分：<span>9.0</span></div>
                            <div className="movieItems-director">导演：张艺谋</div>
                            <div className="movieItems-actor">主演：昆凌</div>
                            <div className="movieItems-tag">
                                <span className="tTag tTag-red">今日最热</span>
                                <span className="tTag tTag-blue">口碑最佳</span>
                            </div>
                    </div>
                    <div className="movieItems-btn">
                        <button className="tBtn">购票</button>
                        <span className="movieItems-price">29.9元</span>
                    </div>
                </div>
            </div>

        );
    }
}

MovieItems.propTypes = {

};

export default MovieItems;
