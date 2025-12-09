import { useState, useRef, useEffect } from "react";
import { Pin, Image, Archive, MoreVertical, Undo, Redo, Sparkles, Paintbrush, Clock } from "lucide-react";
import { NOTE_COLORS } from "../constant/constants";

const EditNote = ({ note, onSave, onClose }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [isPinned, setIsPinned] = useState(note.isPinned);
    const [color, setColor] = useState(note.color);
    const [editedAt, setEditedAt] = useState(Date.now()); // Track last edit time for "Edited" label

    const modalRef = useRef();

    useEffect(() => {
        // Focus or simple setup if needed

        // Prevent scrolling on body when modal is open
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleSave = () => {
        onSave({
            ...note,
            title,
            content,
            isPinned,
            color,
            updatedAt: Date.now()
        });
        onClose();
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleSave();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="w-full max-w-[600px] bg-white rounded-lg shadow-xl relative flex flex-col max-h-[90vh] transition-all"
                style={{ backgroundColor: color }}
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to overlay
            >
                {/* Header - Image placeholder if any (not implemented yet) */}

                {/* Content */}
                <div className="p-4 overflow-y-auto custom-scrollbar">
                    <div className="flex justify-between items-start mb-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full font-medium text-xl placeholder-gray-500 focus:outline-none bg-transparent"
                        />
                        <button
                            onClick={() => setIsPinned(!isPinned)}
                            className={`p-2 rounded-full hover:bg-black/10 transition-colors ${isPinned ? "text-black fill-current" : "text-gray-500"
                                }`}
                        >
                            <Pin className="w-5 h-5" />
                        </button>
                    </div>

                    <textarea
                        placeholder="Note"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full resize-none focus:outline-none bg-transparent placeholder-gray-600 text-sm min-h-[150px] leading-relaxed"
                    />

                    {/* Edited timestamp */}
                    <div className="flex justify-end mt-2">
                        <p className="text-[10px] text-gray-500">
                            Edited {new Date(note.updatedAt || note.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                </div>

                {/* Footer / Toolbar */}
                <div className="px-4 py-3 flex justify-between items-center bg-white/50 rounded-b-lg border-t border-gray-100/50">
                    <div className="flex gap-1 text-gray-600">
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors" title="Remind me">
                            <Clock className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors" title="Background options">
                            <Paintbrush className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors" title="Add image">
                            <Image className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors" title="Archive">
                            <Archive className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors" title="More">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors ml-2" title="Undo">
                            <Undo className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-black/10 rounded-full transition-colors" title="Redo">
                            <Redo className="w-4 h-4" />
                        </button>
                    </div>

                    <button
                        onClick={handleSave}
                        className="px-6 py-2 text-sm font-medium text-gray-800 hover:bg-black/5 rounded-md transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNote;
