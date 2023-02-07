import { connectToDatabase, db } from "./mongodb";
import { Note } from "../models/notes";
import { INote } from "@/interfaces/noteInterface";
import { Document } from "mongodb";

async function addNote(userId: string, newNote: INote) {
  let note = new Note({ userId, ...newNote });
  let noteDoc = await note.save();
  return noteDoc;
}
async function deleteNote(id: string) {
  console.log(id);
  await Note.deleteOne({ _id: id });
}
async function updateNote(id: string, updatedNote: INote) {
  let note = await Note.findOne({ _id: id });
  note.subject = updatedNote.subject || note.subject;
  note.content = updatedNote.content || note.content;
  let noteDoc = await note.save();
  return noteDoc;
}

async function getNotes(id: string) {
  let notes = await Note.find({ userId: id });
  return notes;
}
export { addNote, deleteNote, updateNote, getNotes };
