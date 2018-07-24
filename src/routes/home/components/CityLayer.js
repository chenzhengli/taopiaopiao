import React, { Component, PropTypes } from 'react';
import "./CityLayer.css";
class CityLayer extends Component {
    render() {
        return (
            <div className="cityLayer">
                <div className="cityLayer-title">
                    <div className="cityLayer-close">关闭</div>
                    选择城市
                </div>
                <div className="cityLayer-content">
                    <div className="cityBlock" id="定位">
                        <div className="cityBlock-label">定位城市</div>
                        <div className="cityBlockWraper">
                            <div className="cityBlock-item">杭州</div>
                        </div>
                    </div>
                    <div className="cityBlock" id="热门">
                        <div className="cityBlock-label">热门城市</div>
                        <div className="cityBlockWraper">
                          <div className="cityBlock-item">杭州</div>
                          <div className="cityBlock-item">杭州</div>
                          <div className="cityBlock-item">杭州</div>
                          <div className="cityBlock-item">杭州</div>
                          <div className="cityBlock-item">杭州</div>
                        </div>
                    </div>
                  <div className="cityList" id="A">
                    <div className="cityList-label">A</div>
                    <ul className="cityList-wrap">
                      <li className="cityList-item">阿坝</li>
                      <li className="cityList-item">阿坝</li>
                      <li className="cityList-item">阿坝</li>
                      <li className="cityList-item">阿坝</li>
                    </ul>
                  </div>
                </div>
              <div className="cityLayer-index">
                <ul>
                  <li><a href="#定位">定位</a></li>
                  <li><a href="#热门">热门</a></li>
                  <li><a href="#A">A</a></li>
                </ul>
              </div>
            </div>
        );
    }
}

CityLayer.propTypes = {

};

export default CityLayer;
