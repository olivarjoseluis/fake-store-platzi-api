import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "./components/NavBar"
import Router from './router/Router'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  )
}

export default App
