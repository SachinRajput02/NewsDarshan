import React, { useEffect, useState,useContext } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";



const News = (props) => {
  const {url}=useContext(StoreContext)
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);

    const response = await axios.get(`${url}/api/news/newsapinews`, {
      params: {
          country: props.country,
          category: props.category,
          page: page,
          pageSize: props.pageSize,
          apiKey: props.apiKey
      }
  });

    // const url2 = `https://newsapi.org/v2/everything?q=apple&from=2025-03-08&to=2025-03-08&sortBy=popularity&apiKey=${props.apiKey}`;


    // const url2 = `http://localhost:5000/api/news/newsapinews?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);

    if (response.data.articles) {
      // ✅ Ensure articles exist before updating state
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    } else {
      console.log("No articles found");
      setArticles([]); // ✅ Prevents undefined state
      setTotalResults(0);
    }

    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    const fetchNews = async () => {
      await updateNews();
      
    };
    fetchNews();
  }, [props.country, props.category, props.apiKey, props.pageSize]); // ✅ Runs only when category changes

  const fetchMoreData = async () => {
    setPage(page + 1); // ✅ Increment page number

    try {
        const response = await axios.get(`${url}/api/news/newsapinews`, {
            params: {
                country: props.country,
                category: props.category,
                apiKey: props.apiKey,
                page: page,
                pageSize: props.pageSize
            }
        });

        let parsedData = response.data;

        if (parsedData.articles) {
            setArticles(articles.concat(parsedData.articles)); // ✅ Append new articles
            setTotalResults(parsedData.totalResults);
        } else {
            console.log("No more articles found");
        }

    } catch (error) {
        console.error("Error fetching more news:", error);
    }
};

  return (
    <>
      <h1
        className="headline-heading"
      >
        NewsDarshan-Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles ? articles.length : 0} // ✅ Ensures no undefined errors
        next={fetchMoreData}
        hasMore={articles ? articles.length !== totalResults : false}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="news-container">
            {articles.map((element, index) => {
              if (!element) return null;

              return (
                <div
                  className="news-item"
                  key={element.url ? element.url : index}
                >
                  <NewsItem
                    title={element.title || "No Title Available"}
                    description={element.description }
                    imageUrl={
                      element.urlToImage || "https://via.placeholder.com/150"
                    }
                    newsUrl={element.url || "#"}
                    author={element.author || "Unknown"}
                    date={element.publishedAt || "Date Not Available"}
                    source={element.source?.name || "Unknown Source"}
                  />
                </div>
              );
            })}
          </div>

          {/* <div className="row">
            {articles.map((element, index) => {
              if (!element) return null; // ✅ Skip if element is undefined

              return (
                <div
                  className="col-md-4"
                  key={element.url ? element.url : index}
                >
                  <NewsItem
                    title={element.title || "No Title Available"} // ✅ Default fallback
                    description={element.description || "No Description"}
                    imageUrl={
                      element.urlToImage || "https://via.placeholder.com/150"
                    } // ✅ Placeholder image
                    newsUrl={element.url || "#"}
                    author={element.author || "Unknown"}
                    date={element.publishedAt || "Date Not Available"}
                    source={element.source?.name || "Unknown Source"}
                  />
                </div>
              );
            })}
          </div> */}
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
