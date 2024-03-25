import mongoose from "mongoose";
//! they all need to be required

const infoSchema = new mongoose.Schema(
  {
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
    stars: {
      type: Number,
    },
    expirationDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const info = mongoose.model("info", infoSchema);

export default info;
