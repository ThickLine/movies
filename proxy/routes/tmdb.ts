import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { asyncHandler } from "../helpers/asyncHandler";
const tmdbApiKey = process.env.TMDB_API_KEY;
const router = express.Router();

router.get(
  "/*",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const url = `https://image.tmdb.org/t/p/original${req.path}?api_key=${tmdbApiKey}`;
    const response = await axios.get(url, { responseType: "stream" });
    response.data.pipe(res);
  })
);

export default router;
