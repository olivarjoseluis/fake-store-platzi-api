import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import NavBar from "./components/NavBar"
import Router from './router/Router'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
