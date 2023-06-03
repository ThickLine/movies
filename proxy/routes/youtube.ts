import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { asyncHandler } from "../helpers/asyncHandler";

const router = express.Router();

router.get(
  "/*",
  asyncHandler(async (req: Request, res: Response) => {
    const url = `https://img.youtube.com${req.path}`;
    const response = await axios.get(url, { responseType: "stream" });
    response.data.pipe(res);
  })
);

export default router;
