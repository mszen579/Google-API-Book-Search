import React from 'react'
// import SingleBook from './SingleBook';
import { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
          result: [],
          keywords: null
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }
    
      inputChangeHandler = event => {
       // console.log(event.target.value);
        this.setState({
          keywords: event.target.value
        });
      };
    
     componentDidMount() {
        
        this.setState(function() {
            return {
              keywords: this.props.keywords
            };
          });
        
        axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            this.props.match.params.keyword
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
              {this.state.result &&
                this.state.result.map(function(item) {
                  return (
                    <div
                    >
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
                          <a href={item.volumeInfo.infoLink} className="blog_img">
                                    <img alt="img" src={ item.volumeInfo.imageLinks.thumbnail && item.volumeInfo.imageLinks.thumbnail || "https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.aspx"}  />
                          </a>
                        </div>
                        <h2 className="blog_title">
                          <a href="events-single.html">
                            {" "}
                                    {item.volumeInfo.title}
                          </a>
                        </h2>
                        <div className="blog_commentbox">
                          <p>
                                    <i className="fa fa-clock-o" /><Moment className="text-muted" format="DD MMM YYYY">
                                      {item.volumeInfo.publishedDate}
                                    </Moment>
                          </p>
                          <p>
                                    <i className="fa fa-map-marker" /> {item.volumeInfo.publisher}
                          </p>
                        </div>
                        <p className="blog_summary">
                                              {item.volumeInfo.description}{" "}
                                              <a
                                                href={item.volumeInfo.infoLink}
                                                className="blog_summary"
                                              >
                                                ...more
                                              </a>
                                            </p>
                        <p className="blog_summary">
                        Page count: {item.volumeInfo.pageCount}
                        </p>
                        <p className="blog_summary">
                        categories: {item.volumeInfo.categories}
                        </p>
                        <br/>
                        <p className="blog_summary">
                        Average rating: {String(item.volumeInfo.averageRating)}
                        </p>
                        <p className="blog_summary">
                        Price: € {item.saleInfo.retailPrice && item.saleInfo.retailPrice.amount || <div>no price available</div>}
                        </p>
                        <br/>
                        <p className="blog_summary">
                        Print type: {item.volumeInfo.printType}
                        </p>
                       
                        
                        
                        <p className="blog_summary">Authors: {item.volumeInfo.authors}</p>
                      
                         
                        <p className="blog_summary" style={{color: "red"}}>Sale availability: {item.saleInfo.saleability}</p>
                         <br/>
                         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                    </div>
                  );
                })}
            </div>

            )
    }
}