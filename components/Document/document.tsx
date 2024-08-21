import { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io, Socket } from "socket.io-client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Modal from "../atoms/modal";
import Input from "../atoms/custom-input";

const SAVE_INTERVAL_MS = 2000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor: React.FC = () => {
  const { id } = useParams() as { id: string };
  const documentId = id;
  const [socket, setSocket] = useState<Socket | null>(null);
  const [quill, setQuill] = useState<Quill | null>(null);
  const [isTextSelected, setIsTextSelected] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });
  const [comment, setComment] = useState('');

  const openModal = () => {
    const selection = quill?.getSelection();
    if (selection) {
      const bounds = quill.getBounds(selection.index, selection.length);
      console.log("Open modal position:", bounds);
      setModalPosition({ 
        top: bounds.top + bounds.height,
        right: 10 // Fixed right position
      });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const submitComment = () => {
    //api 
    closeModal();
    setComment('');
  }

  useEffect(() => {
    const s = io("http://localhost:8080");
    console.log("Socket initialized:", s);
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once("load-document", (document: any) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: any) => {
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: any, oldDelta: any, source: string) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (quill == null) return;

    const handleSelectionChange = (range: any) => {
      if (range && range.length > 0) {
        const rangeBounds = quill.getBounds(range.index, range.length);
        console.log("Selection bounds:", rangeBounds);
        const editorContainer = quill.root.parentElement;

        if (editorContainer) {
          setIsTextSelected(true);
        }
      } else {
        setIsTextSelected(false);
      }
    };

    quill.on("selection-change", handleSelectionChange);

    return () => {
      quill.off("selection-change", handleSelectionChange);
    };
  }, [quill]);

  const wrapperRef = useCallback((wrapper: HTMLDivElement | null) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="container" ref={wrapperRef}>
          {isTextSelected && (
            <div
              className={`absolute z-10 border border-gray-200 shadow-md rounded-t-2xl rounded-b-2xl bg-white py-2 px-1 text-center transition-opacity duration-250 ease-in-out transition-z-index delay-250 `}
              style={{ top: `${modalPosition.top}px`, right: `10px` }}
            >
              <button onClick={openModal}>
                <Image
                  src="/icons/message-plus.svg"
                  width={24}
                  height={24}
                  alt="Menu icon"
                />
              </button>
              <Image
                src="/icons/message-plus.svg"
                width={24}
                height={24}
                alt="Menu icon"
              />
              <Image
                src="/icons/message-plus.svg"
                width={24}
                height={24}
                alt="Menu icon"
              />
            </div>
          )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} top={modalPosition.top} right={modalPosition.right}>
      <Input
          name="name"
          className="rounded mb-2"
          value={comment}
          setValue={(val) => setComment(val)}
          placeholder=""
        />

        <div className="pb-4 flex justify-end">
          <button
            className="mx-auto py-2 px-5 text-center font-inter font-semibold text-[14px] rounded-2xl hover:bg-gray-600 hover:text-white text-gray-700"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="mx-auto bg-[#0b57d0] py-2 px-5 text-center font-inter font-semibold text-[14px] rounded-2xl text-white"
            onClick={submitComment}
          >
            Comment
          </button>
        </div>
      </Modal>
    </>
  );
};

export default TextEditor;
