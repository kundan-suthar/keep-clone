import { useState, useRef, useEffect } from "react";
import { Image, CheckSquare, Paintbrush, Pin, Sparkles } from "lucide-react";
//import { enhanceNoteContent } from "../services/geminiService";

const CreateNote = ({ addNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const formRef = useRef();

  const handleClose = () => {
    if (title.trim() || content.trim()) {
      addNote(title, content, "#ffffff", isPinned);
    }
    setTitle("");
    setContent("");
    setIsPinned(false);
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        if (isExpanded) {
          handleClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded, title, content, isPinned]);

  const handleAIHelp = async () => {
    if (!content.trim()) return;
    setIsProcessing(true);
    try {
      // const improved = await enhanceNoteContent(content, "Improve clarity and correct grammar.");
      //  setContent(improved);
    } catch (e) {
      // Silent fail or toast
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="w-full max-w-[600px] mx-auto mb-8 relative z-30"
      ref={formRef}
    >
      <div
        className={`bg-white rounded-lg shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] transition-all duration-200 border border-transparent ${
          isExpanded ? "p-4" : "p-0 flex items-center h-12 overflow-hidden"
        }`}
      >
        {isExpanded && (
          <div className="flex justify-between items-start mb-2">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full font-medium text-base placeholder-gray-500 focus:outline-none bg-transparent"
            />
            <button
              onClick={() => setIsPinned(!isPinned)}
              className={`p-2 rounded-full hover:bg-gray-100 ${
                isPinned ? "text-black fill-current" : "text-gray-500"
              }`}
            >
              <Pin className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className={`w-full ${!isExpanded ? "px-4" : ""}`}>
          <textarea
            placeholder={isExpanded ? "Take a note..." : "Take a note..."}
            value={content}
            onClick={() => setIsExpanded(true)}
            onChange={(e) => setContent(e.target.value)}
            className={`w-full resize-none focus:outline-none bg-transparent placeholder-gray-600 font-medium ${
              isExpanded
                ? "min-h-[100px] text-sm"
                : "h-full py-3 cursor-text text-sm mt-6"
            }`}
          />
        </div>

        {isExpanded ? (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-1 text-gray-600">
              {/* Quick Actions (Visual only for this demo mostly) */}
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Add Image"
              >
                <Image className="w-4 h-4" />
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Background"
              >
                <Paintbrush className="w-4 h-4" />
              </button>
              <button
                className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${
                  isProcessing ? "animate-pulse text-blue-500" : ""
                }`}
                onClick={handleAIHelp}
                title="AI Polish"
                disabled={isProcessing}
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleClose}
              className="px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-sm transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 pr-4 text-gray-500">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <CheckSquare className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Paintbrush className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Image className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNote;
