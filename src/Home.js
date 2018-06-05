import React, { Component } from "react";
import axios from "axios";
import "./components/style/home.css";
import Moment from "react-moment";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import NumberFormat from 'react-number-format';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      keywords: null
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputChangeHandler = event => {
   // console.log(event.target.value);
    this.setState({
      keywords: event.target.value
    });
  };

  submitHandler(e) {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.keywords
        }&handleResponse`
      )
      .then(function(results) {
        return results.data.items;
      })
      .then(
        function(result) {
          this.setState(function() {
            return {
              result: result
            };
          });
        }.bind(this)
      );
  }

  render() {
    return (
      <div>
      
      {/* <Books lists={this.state.result}/> */}
        <form onSubmit={this.submitHandler} style={{textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",}} className="header">
          <input 
         style={{  width:"50%", height:"40px", borderRadius:"8px", fontSize:"15px"}}
            className="wp-form-control"
            onChange={this.inputChangeHandler}
            className="input"
            type="text"
            placeholder="Search for your favorite category"
          />
          <button className="wpcf7-submit">submit</button>
        </form>

        <div className="table-responsive-md">
          <Carousel autoPlay style={{ height: "530px", textAlign: "center" }}>
            {this.state.result &&
              this.state.result.slice(0, 3).map(function(results) {
                return (
                  <div
                    style={{
                      height: "530px",
                      width: "100px",
                      textAlign: "center",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "50%"
                    }}
                  >
                    <img src={results.volumeInfo.imageLinks.thumbnail} />
                    <h1
                      className="legend titlehome"
                      style={{ fontSize: "30px" }}
                    >
                      {results.volumeInfo.title} &nbsp;
                      <a href={results.volumeInfo.infoLink}>more...</a>
                    </h1>
                  </div>
                );
              })}
          </Carousel>
        </div>
        <br />
        <br />
        <br />

        <section id="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="aboutus_area wow fadeInLeft">
                  <h2 className="titile">Who we are?</h2>

                  <h5>
                    <b>The biggest search ever</b>
                  </h5>
                  <p>
                    Google Books (previously known as Google Book Search and
                    Google Print and by its codename Project Ocean)[1] is a
                    service from Google Inc. that searches the full text of
                    books and magazines that Google has scanned, converted to
                    text using optical character recognition (OCR), and stored
                    in its digital database.[2] Books are provided either by
                    publishers and authors, through the Google Books Partner
                    Program, or by Google's library partners, through the
                    Library Project.[3] Additionally, Google has partnered with
                    a number of magazine publishers to digitize their
                    archives.[4][5] The Publisher Program was first known as
                    'Google Print' when it was introduced at the Frankfurt Book
                    Fair in October 2004. The Google Books Library Project,
                    which scans works in the collections of library partners and
                    adds them to the digital inventory, was announced in
                    December 2004. The Google Books initiative has been hailed
                    for its potential to offer unprecedented access to what may
                    become the largest online body of human knowledge[6][7] and
                    promoting the democratization of knowledge.[8] But it has
                    also been criticized for potential copyright
                    violations,[8][9] and lack of editing to correct the many
                    errors introduced into the scanned texts by the OCR process.
                    As of October 2015, the number of scanned book titles was
                    over 25 million, but the scanning process has slowed down in
                    American academic libraries.[10][11] Google estimated in
                    2010 that there were about 130 million distinct titles in
                    the world,[12][13] and stated that it intended to scan all
                    of them.[12]
                  </p>
                
              
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="newsfeed_area wow fadeInRight">
                  <ul className="nav nav-tabs feed_tabs" id="myTab2">
                    <li className="active">
                      <a href="#news" data-toggle="tab">
                        LIST OF BOOKS
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="news">
                      <ul className="news_tab">
                        {this.state.result &&
                          this.state.result.slice(0,3).map(function(results) {
                            return (
                              <li>
                                <div className="media">
                                  <div className="media-left">
                                    <a className="news_img" href="#">
                                      <img
                                        className="media-object"
                                        style={{ borderRadius: "2px" }}
                                        src={
                                          results.volumeInfo.imageLinks
                                            .thumbnail
                                        }
                                        alt="img"
                                      />
                                    </a>
                                  </div>

                                  <div className="media-body">
                                    <p className="legend titlehome">
                                      <b>{results.volumeInfo.title}</b><br/>
                                      <b>Authors: {results.volumeInfo.authors}</b>
                                    </p>
                                    <p>
                                      {results.volumeInfo.description}{" "}
                                      <a
                                        href={results.volumeInfo.infoLink}
                                        className="blog_summary"
                                      >
                                        ...more
                                      </a>
                                    </p>

                                                                            <br/>
                                    <b>Publisher: {results.volumeInfo.publisher}</b>
                                  
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><hr />
         
        </section>
        



<div>
<section id="imgBanner">
  <h2>All Books</h2>
</section>
{this.state.result && this.state.result.map(function(results) {
  
      return(
<section style={{marginLeft: "22%",
        marginRight: "auto",
        width: "80%"}} 
        id="courseArchive">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-8">
        <div className="courseArchive_content">
          <div className="row">
            <div className="col-lg-12 col-12 col-sm-12">
              <div className="single_blog_archive wow fadeInUp">
                <div className="blogimg_container">
                  <a href="#" className="blog_img">
                            <img alt="img" src={ results.volumeInfo.imageLinks.thumbnail}  />
                  </a>
                </div>
                <h2 className="blog_title">
                  <a href="events-single.html">
                    {" "}
                            {results.volumeInfo.title}
                  </a>
                </h2>
                <div className="blog_commentbox">
                  <p>
                            <i className="fa fa-clock-o" /><Moment className="text-muted" format="DD MMM YYYY">
                              {results.volumeInfo.publishedDate}
                            </Moment>
                  </p>
                  <p>
                            <i className="fa fa-map-marker" /> {results.volumeInfo.publisher}
                  </p>
                </div>
                <p className="blog_summary">
                                      {results.volumeInfo.description}{" "}
                                      <a
                                        href={results.volumeInfo.infoLink}
                                        className="blog_summary"
                                      >
                                        ...more
                                      </a>
                                    </p>
                <p className="blog_summary">
                Page count: {results.volumeInfo.pageCount}
                </p>
                <p className="blog_summary">
                categories: {results.volumeInfo.categories}
                </p>
                <br/>
                <p className="blog_summary">
                Average rating: {results.volumeInfo.averageRating}
                </p>
                <br/>
                <p className="blog_summary">
                Print type: {results.volumeInfo.printType}
                </p>
               
                
                
                <p className="blog_summary">Authors: {results.volumeInfo.authors}</p>
              
                 
                <p className="blog_summary" style={{color: "red"}}>Sale availability: {results.saleInfo.saleability}</p>
                 <br/>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
      }
   )}

</div>






      </div>
    );
  }
}

export default Home;