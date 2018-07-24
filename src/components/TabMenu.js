import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import './TabMenu.css'
class TabMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            current:this.props.current,
        }
    }
    render() {
        return (
            <div className="tabMenu">
                <Link to="/" className={`tabMenu-btn ${this.state.current=="movie" && 'tabMenu-btn-active'}`}>
                    <i className={`tabMenu-icon tabMenu-movie  ${this.state.current=="movie" && 'tabMenu-movie-active'}`}></i>
                    <span className="tabMenu-des">电影</span>
                </Link>
                <Link to="/user" className={`tabMenu-btn ${this.state.current=="user"&& 'tabMenu-btn-active'}`}>
                    <i className={`tabMenu-icon tabMenu-user ${this.state.current=="user" && 'tabMenu-user-active'}`}></i>
                    <span className="tabMenu-des">我的</span>
                </Link>
            </div>
        );
    }
}

TabMenu.propTypes = {

};

export default TabMenu;