import React, { useEffect, useState,useContext } from "react";
import { Search } from "lucide-react";
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
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setArticles([]);
    setPage(1); // Reset page when searching
    updateNews();
    
  };
  

  const updateNews = async () => {
    props.setProgress(10);

    const response = await axios.get(`${url}/api/news/newsapinews`, {
      params: {
          country: props.country,
          category: props.category,
          q:query,
          page: page,
          pageSize: props.pageSize,
          apiKey: props.apiKey
      }
  });

    // const url2 = `http://localhost:5000/api/news/newsapinews?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);

    if (response.data.articles) {
  
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    } else {
      console.log("No articles found");
      setArticles([]); 
      setTotalResults(0);
    }

    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage((prevPage) => prevPage +1);
     // ✅ Ensure latest page value
    try {
        const response = await axios.get(`${url}/api/news/newsapinews`, {
            params: {
                country: props.country,
                category: props.category,
                q: query, // ✅ Ensure latest query is used
                apiKey: props.apiKey,
                page: page, 
                pageSize: props.pageSize
            }
        });

        if (response.data.articles) {
            setArticles((prevArticles) => [...prevArticles, ...response.data.articles]); // ✅ Append new articles
            setTotalResults(response.data.totalResults);
        } else {
            console.log("No more articles found");
        }
    } catch (error) {
        console.error("Error fetching more news:", error);
    }
};


//   const fetchMoreData = async () => {
//     setPage(page + 1); // ✅ Increment page number

//     try {
//         const response = await axios.get(`${url}/api/news/newsapinews`, {
//             params: {
//                 country: props.country,
//                 category: props.category,
//                 q:query,
//                 apiKey: props.apiKey,
//                 page: page,
//                 pageSize: props.pageSize
//             }
//         });

//         let parsedData = response.data;

//         if (parsedData.articles) {
//             setArticles(articles.concat(parsedData.articles)); // ✅ Append new articles
//             setTotalResults(parsedData.totalResults);
//         } else {
//             console.log("No more articles found");
//         }

//     } catch (error) {
//         console.error("Error fetching more news:", error);
//     }
// };


useEffect(() => {
  updateNews();
}, [props.country, props.category, props.apiKey, props.pageSize]); 

// useEffect(() => {
//   const fetchNews = async () => {
//     await updateNews();
//   };
//   fetchNews();
// }, [props.country, props.category,query, props.apiKey, props.pageSize]); 

  return (
    <>
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <Search size={20} />
        </button>
      </form>
    </div>
      <h1
        className="headline-heading"
      >
        NewsDarshan-Top {capitalizeFirstLetter(query===""?props.category:query)} News
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

         
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  q: "",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  q: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
