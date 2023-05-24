import mongoose from "mongoose";

const { Schema } = mongoose;

const profileSchema = new Schema({
  userName: { type: String, required: true },
  profileImg: { type: String },
  bikeName: { type: String },
  type: { type: String },
  bought: { type: String },
  mileage: { type: String },
  lastService: { type: String },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
