import { Pin, Trash2, Archive, Palette, MoreVertical } from "lucide-react";

import { NOTE_COLORS } from "../constant/constants";
import { useState } from "react";

const NoteCard = ({
  note,
  onEdit,
  onDelete,
  onArchive,
  onPin,
  onColorChange,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Find color object for border handling if needed
  const currentColor =
    NOTE_COLORS.find((c) => c.value === note.color) || NOTE_COLORS[0];
  const isDefaultColor = note.color === "#ffffff";

  return (
    <div
      className={`group relative rounded-lg border transition-shadow duration-200 hover:shadow-md break-inside-avoid mb-4 overflow-hidden ${
        isDefaultColor ? "border-gray-200" : "border-transparent"
      }`}
      style={{ backgroundColor: note.color }}
    >
      {/* Pin Button - Only visible on hover unless pinned */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPin(note.id);
        }}
        className={`absolute top-2 right-2 p-2 rounded-full hover:bg-black/5 transition-opacity z-10 ${
          note.isPinned ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <Pin
          className={`w-4 h-4 ${
            note.isPinned ? "fill-current text-gray-800" : "text-gray-600"
          }`}
        />
      </button>

      <div
        onClick={() => onEdit(note)}
        className="p-4 cursor-default min-h-[100px]"
      >
        {note.title && (
          <h3 className="font-medium text-base mb-3 text-[#202124]">
            {note.title}
          </h3>
        )}
        <p className="text-sm text-[#202124] whitespace-pre-wrap leading-5">
          {note.content}
        </p>
      </div>

      {/* Toolbar - Visible on hover */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between px-2 pb-2">
        <div className="flex gap-1">
          {/* Color Palette */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowColorPicker(!showColorPicker);
              }}
              className="p-2 rounded-full hover:bg-black/5 text-gray-600"
              title="Change color"
            >
              <Palette className="w-4 h-4" />
            </button>

            {showColorPicker && (
              <div
                className="absolute bottom-full left-0 mb-2 bg-white shadow-lg rounded-lg p-2 flex gap-1 z-20 w-40 flex-wrap border border-gray-200"
                onMouseLeave={() => setShowColorPicker(false)}
                onClick={(e) => e.stopPropagation()}
              >
                {NOTE_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      onColorChange(note.id, c.value);
                      setShowColorPicker(false);
                    }}
                    className={`w-6 h-6 rounded-full border border-gray-300 hover:border-gray-500`}
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  />
                ))}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onArchive(note.id);
            }}
            className="p-2 rounded-full hover:bg-black/5 text-gray-600"
            title="Archive"
          >
            <Archive className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note.id);
            }}
            className="p-2 rounded-full hover:bg-black/5 text-gray-600"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-full hover:bg-black/5 text-gray-600"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
