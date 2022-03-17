import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log("Server is running!"));
