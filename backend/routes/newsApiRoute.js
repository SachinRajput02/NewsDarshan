import express from "express";
import {fetchNewsApi} from "../controllers/NewsApiController.js"

const newsApiRouter = express.Router();

newsApiRouter.get("/newsapinews", fetchNewsApi);

export default newsApiRouter;