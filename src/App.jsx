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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://quilljs.com" target="_blank">
          <img src="/quill.svg" className="logo quill" alt="Quill logo" />
        </a>
      </div>
      <h1>Simple Quiz Composer</h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
      <p>Output:</p>
      <code>{value}</code>
    </div>
  );
}

export default App;
