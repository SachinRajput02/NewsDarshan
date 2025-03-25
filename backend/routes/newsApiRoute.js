import express from "express";
import {fetchNewsApi,fetchNewsApiSearch} from "../controllers/NewsApiController.js"

const newsApiRouter = express.Router();

newsApiRouter.get("/newsapinews", fetchNewsApi);
newsApiRouter.get("/newsapisearch", fetchNewsApiSearch);

export default newsApiRouter;