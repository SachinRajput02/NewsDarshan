import axios from "axios"
import express from "express"

const fetchNewsApi = async (req, res) => {

  const { country, category,page, pageSize, apiKey } = req.query; // Receive params from request body
  

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
    // const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-02-23&sortBy=publishedAt&apiKey=a1644811b3494e189d0426792491cf87`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.message
    });
  }
};

export { fetchNewsApi };