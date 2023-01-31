import Editor from "@/components/Editor";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1 className="my-8 text-3xl font-bold">Simple Quiz Composer</h1>
      <Editor value={value} onChange={setValue} />
      <h2 className="my-4 text-xl font-bold">Output:</h2>
      <div className="w-full bg-slate-400">
        <code>{value}</code>
      </div>
    </div>
  );
}

export default App;
