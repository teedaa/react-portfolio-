import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header.js'
import Projects from './components/project.js';
import Footer from './components/footer.js'
import About from "./components/about";


function App() { 
  const [currentPage, handlePageChange] = useState('About');
  
  useEffect(() => {
    document.title = `${currentPage}`;
  });
  
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
        case 'Portfolio':
          return <Projects />;
          case 'Contact':
            return <ContactForm />;
            case 'Resume':
              return <Resume />;
            }
          };
          
          return (
          <div>

    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    <main>
      <div>
        {renderPage(currentPage)}
      </div>
    </main>
    <Footer />
          </div>
  );
}

export default App;
