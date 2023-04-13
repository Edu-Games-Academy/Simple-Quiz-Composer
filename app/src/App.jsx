import React from 'react';

import Container from '@/components/Container';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { QuestionsProvider } from '@/contexts/QuestionsContext';
import { ToastProvider } from '@/contexts/ToastContext';

function App() {
  return (
    <div className="App">
      <QuestionsProvider>
        <ToastProvider>
          <NavBar />
          <SideBar />
          <Container />
        </ToastProvider>
      </QuestionsProvider>
    </div>
  );
}

export default App;
