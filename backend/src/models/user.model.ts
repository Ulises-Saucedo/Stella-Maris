import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../ts/interfaces/user.interfaces";

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
      enum: ["admin", "superadmin"],
    },
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.model<IUser>("user", UserSchema);

export default User;
