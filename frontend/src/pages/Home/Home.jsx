import './Home.css';
import React, { useState } from 'react';
import News from '../../components/News/News';
// import Navbar from '../../components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import StoreContextProvider from '../../components/context/StoreContext';

const Home = () => {
  const apiKey = (import.meta.env.REACT_APP_NEWS_API)||'ac4fb85d740d4d0bb2261df0f804b096';
  // const apiKey = (import.meta.env.REACT_APP_NEWS_API);
  const pageSize = 3;
  const [progress, setProgress] = useState(0);

  return (
    
      <div>
         {/* <Navbar/> */}
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <StoreContextProvider>
        
        <Routes>
        <Route exact path="/" element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us"category="general"/>} />
          <Route exact path="/general" element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us"category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us"category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us"category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us"category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us"category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us"category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us"category="technology"/>} />
        </Routes>
        </StoreContextProvider>
        
      </div>
    
  );
};

export default Home;
