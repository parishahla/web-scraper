import mongoose from "mongoose";
//! they all need to be required
const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The business must have a name"],
        trim: true,
    },
    domain: {
        type: String,
        required: [true, "The business must have a domain"],
        trim: true,
    },
    province: {
        type: String,
    },
    city: {
        type: String,
    },
    stars: {
        type: Number,
    },
    certifiedDate: {
        type: String,
    },
    expirationDate: {
        type: String,
    },
}, { timestamps: true });
const info = mongoose.model("info", infoSchema);
export default info;
