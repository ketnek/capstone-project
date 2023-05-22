import mongoose from "mongoose";

const { Schema } = mongoose;

const routeSchema = new Schema({
  name: { type: String, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
  routeData: { type: Object, required: true },
  notes: { type: String },
  image: { type: String },
  favorite: { type: Boolean, required: true },
});

const Route = mongoose.models.Route || mongoose.model("Route", routeSchema);

export default Route;
