import express from "express";
import router from "./routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ai", router);

app.listen(PORT, () => {
  console.log(`STARTING AI SERVICE... on port ${PORT}`);
});
