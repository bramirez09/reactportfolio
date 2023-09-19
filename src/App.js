import Navbar from './components/navbar/navbar';
import Aboutme from './components/aboutme/aboutme';
import Portfolio from './components/project/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
