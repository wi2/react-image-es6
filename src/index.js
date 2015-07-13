"use strict";

import React from 'react'
import {ReactArcSonic} from 'react-sonic'

export class ReactImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onloadImage() {
    this.state.loaded = true;
    this.forceUpdate();
  }
  getDim() {
    this.width = this.refs.image.getDOMNode().width||this.props.width;
    this.height = this.refs.image.getDOMNode().height||this.props.height;
    this.state.loading = true;
    this.forceUpdate();
  }
  componentDidMount() {
    if (typeof Image !== "undefined") {
      this.image = new Image();
      this.image.onload = this.onloadImage.bind(this);
      this.image.src = this.props.src;
      this.image.setAttribute("class", this.props.className);
      this.getDim();
    }
  }
  render() {
    if (this.state.loaded)
      return <img src={this.props.src} className={this.props.className||''} alt={this.props.alt||''} />
    else if (this.state.loading)
      return <ReactArcSonic fillColor="#FF0000" width={this.width} height={this.height} className={this.props.className||''} title={this.props.alt||''} />
    else
      return <img src={this.props.src} ref="image" className={this.props.className||'image'} alt={this.props.alt||''} />
  }
}
