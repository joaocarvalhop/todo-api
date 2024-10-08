import express from "express";
import { router } from "./routes";
import startDB from "./db/conn"
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

startDB().catch(err => console.log(err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`));
