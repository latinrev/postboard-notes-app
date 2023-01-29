import mongoose, { Model } from "mongoose"
const notesSchema = new mongoose.Schema({
    userId: String,
    subject: String,
    content:String,
  })

const Note = mongoose.models.notes || mongoose.model("notes",notesSchema)
export { Note }
