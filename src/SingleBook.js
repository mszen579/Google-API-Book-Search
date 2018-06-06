import React from 'react';
import Moment from "react-moment";


const SingleBook = (props) =>{
    //console.log(props)
    return(
        <div>
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
                          <a href={props.item.volumeInfo.infoLink} className="blog_img">
                                    <img alt="img" src={ props.item.volumeInfo.imageLinks.thumbnail}  />
                          </a>
                        </div>
                        <h2 className="blog_title">
                          <a href="events-single.html">
                            {" "}
                                    {props.item.volumeInfo.title}
                          </a>
                        </h2>
                        <div className="blog_commentbox">
                          <p>
                                    <i className="fa fa-clock-o" /><Moment className="text-muted" format="DD MMM YYYY">
                                      {props.item.volumeInfo.publishedDate}
                                    </Moment>
                          </p>
                          <p>
                                    <i className="fa fa-map-marker" /> {props.item.volumeInfo.publisher}
                          </p>
                        </div>
                        <p className="blog_summary">
                                              {props.item.volumeInfo.description}{" "}
                                              <a
                                                href={props.item.volumeInfo.infoLink}
                                                className="blog_summary"
                                              >
                                                ...more
                                              </a>
                                            </p>
                        <p className="blog_summary">
                        Page count: {props.item.volumeInfo.pageCount}
                        </p>
                        <p className="blog_summary">
                        categories: {props.item.volumeInfo.categories}
                        </p>
                        <br/>
                        <p className="blog_summary">
                        Average rating: {props.item.volumeInfo.averageRating}
                        </p>
                        <br/>
                        <p className="blog_summary">
                        Print type: {props.item.volumeInfo.printType}
                        </p>
                       
                        
                        
                        <p className="blog_summary">Authors: {props.item.volumeInfo.authors}</p>
                      
                         
                        <p className="blog_summary" style={{color: "red"}}>Sale availability: {props.item.saleInfo.saleability}</p>
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
    )
}


export default SingleBook;

