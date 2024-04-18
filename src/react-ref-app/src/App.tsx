import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { BudgetListView } from './views';

function App() {

  const Routing = () => {
    return (
      <Routes>
        <Route path="/" element={<BudgetListView />} />
      </Routes>
    )
  };

  return (
    <Router>
      {/* <GlobalNavMenu /> */}
      <Routing />
      {/* <GlobalFooter /> */}
    </Router>
  );
}

export default App;
