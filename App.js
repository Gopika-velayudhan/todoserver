import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import route from "./router/TaskRoute.js";
import dotenv from 'dotenv'
dotenv.config()


mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.use("/task", route);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
