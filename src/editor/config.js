import hljs from "highlight.js";
import katex from "katex";
window.katex = katex;

export const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ font: [] }, { size: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "super" }, { script: "sub" }],
    [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ direction: "rtl" }, { align: [] }],
    ["link", "image", "video", "formula"],
    ["clean"],
  ],
};
