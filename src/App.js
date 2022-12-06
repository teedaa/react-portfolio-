import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, {Component} from 'react';
import Header from './components/header'
import Projects from './components/project';
import Footer from './components/footer'
import About from "./components/about";
import ContactForm from "./components/contact";
import Resume from "./components/resume";

class App extends Component {
  render() {
    return (
      <div >
        <div >
		<div >
      <Header></Header>
			<About></About>
      <div>
			<Projects></Projects>
      </div>
      <div>
			<Resume></Resume>
      </div>
			<ContactForm></ContactForm>
      <Footer></Footer>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;