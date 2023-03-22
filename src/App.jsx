import React from 'react';

import Container from '@/components/Container';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { QuestionsProvider } from '@/contexts/QuestionsContext';

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
        <NavBar />
        <SideBar />
        <Container />
      </QuestionsProvider>
    </div>
  );
}

export default App;
