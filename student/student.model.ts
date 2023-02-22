import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  class: { type: Number, require: true, max: 12, min: 1 },
  phoneNo: { type: String, Validate: (v) => v.length == 10 },
  isActive: { type: Boolean, default: false },
  joinDate: { type: Date, default: Date.now },
});

export const studentModel = mongoose.model("student", studentSchema);
