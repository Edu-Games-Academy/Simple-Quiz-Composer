import React from 'react';
import { QuestionsProvider, ToastProvider } from 'sqc-ui-components';

import Container from './components/Container';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

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
