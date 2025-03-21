import React from "react";
import "./NewsItem.css";

const NewsItem=(props)=>{ 

    let { title, description, imageUrl, newsUrl, author, date ,source} = props;
    return (
      <div className="NewsItems-main-div">
        <div className="news-card" >
          <span className="news-source">{source}
          </span>
          <img
            src={imageUrl ? imageUrl : ""}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title ? title : ""}</h5>
            <p className="card-text truncate">{description ? description+description : title+title}</p>
            <div className="text-center">
              <a
                href={newsUrl ? newsUrl : ""}
                rel="noreferal"
                className="button-read-more"
              >
                read more
              </a>
            </div>
            <div className="devider"></div>
            <div
              className="card-footer"
              
            >
              <small className="text-body-secondary">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
