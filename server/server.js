import mongoose from "mongoose";
import createServer from "./app";
import logger from "./config/logger";

mongoose
  .connect(process.env.DB_HOST_TEST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected♥");

    const app = createServer();
    app.listen(app.get("port"), () => {
      logger.info(`Server is Running ${app.get("port")}`);
    });
  })
  .catch((err) => console.error(err.message));
