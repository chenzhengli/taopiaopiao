import React, { Component, PropTypes } from 'react';
import './MovieItems.css';

class MovieItems extends Component {
    state={
        movieItem:{},
    };
    componentWillReceiveProps(props){
        console.log(666,props);
        this.setState({movieItem:props.item})
    }
    render() {
        const {movieItem}=this.state;
        return (
            <div>
                <div className="movieItems">
                    <div className="movieItems-poster">
                        <img  src={movieItem.image}/>
                    </div>
                    <div className="movieItems-detail">
                            <div className="movieItems-name">{movieItem.name}</div>
                            <div className="movieItems-score">观众评分：<span>{movieItem.score}</span></div>
                            <div className="movieItems-director">导演：{movieItem.director}</div>
                            <div className="movieItems-actor">主演：{movieItem.actor}</div>
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
