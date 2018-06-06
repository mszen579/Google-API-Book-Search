import React, { Component } from "react";
import axios from "axios";
import "./components/style/home.css";
import Moment from "react-moment";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Books from './Books';
import NumberFormat from 'react-number-format';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

 
  render() {
    return (
      <div>
      
      <Books />
      

      </div>
    );
  }
}

export default List;
