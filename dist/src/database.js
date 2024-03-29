import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export default function startDB() {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
        console.log("Connected to MongoDB");
    })
        .catch((err) => console.error(err));
}
