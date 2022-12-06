import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header'
import Projects from './components/project';
import Footer from './components/footer'
import About from "./components/about";
import ContactForm from "./components/contact";
import Resume from "./components/resume";


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
          <div className="website">

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
