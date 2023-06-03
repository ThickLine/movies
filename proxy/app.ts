import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { createIPX, IPX } from "ipx";
import { IncomingMessage, ServerResponse } from "http";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));

const ipx = createIPX({
  maxAge: 3600,
  alias: {
    "/tmdb": "https://image.tmdb.org/t/p/original/",
    "/youtube": "https://img.youtube.com/",
  },
  domains: ["image.tmdb.org", "img.youtube.com"],
});

async function ipxMiddleware(
  req: IncomingMessage,
  res: ServerResponse,
  next: NextFunction
) {
  try {
    const url = new URL(req.url || "", "http://localhost");
    const buffer = await ipx.getBuffer(url.pathname || ""); // using getBuffer() instead of handleRequest()
    res.end(buffer);
  } catch (error) {
    next(error);
  }
}

app.use("/tmdb", ipxMiddleware);
app.use("/youtube", ipxMiddleware);

// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
