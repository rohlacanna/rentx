import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log("Server is running!"));
