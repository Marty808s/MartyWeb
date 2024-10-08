import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Modules/Nav';
import Footer from './Modules/Footer';
import FrontPage from './Modules/FrontPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Nav />
        <main className="flex-grow p-16">
            <FrontPage />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;