import React, { useState } from 'react';

import Editor from '@/components/Editor';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <div className="ml-64 p-4">
        <div className="mt-28 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700 lg:mt-16">
          <Editor value={value} onChange={setValue} />
          <h2 className="my-4 text-xl font-bold">Output:</h2>
          <div className="w-full bg-slate-400">
            <code>{value}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
