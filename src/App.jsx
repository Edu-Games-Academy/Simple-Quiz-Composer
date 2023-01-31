import { modules } from "@/editor/config";
import "highlight.js/styles/monokai-sublime.css";
import "katex/dist/katex.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1 className="my-8 text-3xl font-bold">Simple Quiz Composer</h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
      <h2 className="my-4 text-xl font-bold">Output:</h2>
      <div className="w-full bg-slate-400">
        <code>{value}</code>
      </div>
    </div>
  );
}

export default App;
