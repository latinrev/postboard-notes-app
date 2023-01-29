import axios from "axios";

export const addNote = async (newNote) => {
  let noteDoc = axios.post("http://localhost:3000/api/notes/addNote", {
    ...newNote,
  });
  return noteDoc;
};
export const getNotes = async () => {
  const notes = await axios.get(`http://localhost:3000/api/notes/getNotes`);
  return notes;
};
export const updateNote = async (id: string, updatedNote) => {
  await axios.post("http://localhost:3000/api/notes/updateNote", {
    id,
    updatedNote,
  });
};
export const deleteNote = async (id: string) => {
  await axios.post("http://localhost:3000/api/notes/deleteNote", { id });
};
