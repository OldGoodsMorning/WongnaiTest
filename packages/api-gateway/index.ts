import express, { Application } from "express";
require("dotenv").config();

const app: Application = express();
const port = 3001;
const cors = require("cors");
const router = require("./routers/router");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
