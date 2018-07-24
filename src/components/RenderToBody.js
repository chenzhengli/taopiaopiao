import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class RenderToBody extends Component {
    componentDidMount(){
        this.popup=document.createElement("div");
        document.body.appendChild(this.popup);
        this.renderToLayer();
    }
    componentDidUpdate(){
        this.renderToLayer();
    }
    componentWillUnmount(){
        this.unRenderToLayer();
    }
    renderToLayer=()=>{
        ReactDOM.render(
            this.props.children,
            this.popup
        )
    }
    unRenderToLayer=()=>{
        if(!this.popup){
            return;
        }
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
        this.popup=null;
    }
    render() {
        return null;
    }
}

export default RenderToBody;