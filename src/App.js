import React from 'react';
import Dashboard from './components/Dashboard';
import DeveloperPerformance from './components/DeveloperPerformance';
import './styles/App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Developer Performance Tracker</h1>
      </header>
      <main>
        <Dashboard />
        <DeveloperPerformance />
      </main>
    </div>
  );
}

export default App;
