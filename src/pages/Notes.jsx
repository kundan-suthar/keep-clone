import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import CreateNote from "../components/CreateNote";
import { Lightbulb } from "lucide-react";

export default function NotesList() {
  const [editingNote, setEditingNote] = useState(null);
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("keep-clone-notes");
    if (saved) return JSON.parse(saved);
    // Default welcome note
    return [
      {
        id: "welcome-note",
        title: "Welcome to KeepClone AI!",
        content:
          "This is a demo of a notes app powered by Gemini.\n\nTry clicking the sparkles icon ✨ when editing a note to use AI features like summarizing or grammar fixing.",
        isPinned: true,
        color: "#fff475", // Yellow
        createdAt: Date.now(),
        labels: [],
      },
    ];
  });
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };
  const archiveNote = (id) => {
    // For this demo, archive just removes it from main view (or could move to separate list)
    // We'll just delete it for simplicity in this specific "landing page" scope
    // or we could add an 'isArchived' flag to the type. Let's assume delete for now.
    setNotes(notes.filter((n) => n.id !== id));
  };

  const pinNote = (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      updateNote({ ...note, isPinned: !note.isPinned });
    }
  };

  const changeNoteColor = (id, color) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      updateNote({ ...note, color });
    }
  };
  useEffect(() => {
    localStorage.setItem("keep-clone-notes", JSON.stringify(notes));
  }, [notes]);

  const pinnedNotes = notes.filter((n) => n.isPinned);
  const otherNotes = notes.filter((n) => !n.isPinned);
  const addNote = (title, content, color, isPinned) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      color,
      isPinned,
      createdAt: Date.now(),
      labels: [],
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div>
      <CreateNote addNote={addNote} />
      {notes.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <Lightbulb className="w-24 h-24 mb-4 text-gray-200" />
          <p className="text-lg">Notes you add appear here</p>
        </div>
      )}

      {pinnedNotes.length > 0 && (
        <div className="mb-8">
          <h6 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 pl-1">
            Pinned
          </h6>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {pinnedNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={setEditingNote}
                onDelete={deleteNote}
                onArchive={archiveNote}
                onPin={pinNote}
                onColorChange={changeNoteColor}
              />
            ))}
          </div>
        </div>
      )}

      {otherNotes.length > 0 && (
        <div>
          {pinnedNotes.length > 0 && (
            <h6 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 pl-1">
              Others
            </h6>
          )}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {otherNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={setEditingNote}
                onDelete={deleteNote}
                onArchive={archiveNote}
                onPin={pinNote}
                onColorChange={changeNoteColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
