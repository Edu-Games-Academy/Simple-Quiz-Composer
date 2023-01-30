import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/monokai-sublime.css";
import "katex/dist/katex.css";
import "./App.css";
import { modules } from "./editor/config";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1 className="text-3xl font-bold my-8">
        Simple Quiz Composer
      </h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
      <h2 className="text-xl font-bold my-4">Output:</h2>
      <div className="w-full bg-slate-400">
        <code>{value}</code>
      </div>
    </div>
  );
}

export default App;
