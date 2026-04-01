import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // Importe o Provider
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import Alunos from './pages/Alunos';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        <Header/>

        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cadastarAlunos' element={<CadastrarAlunos/>} />
            <Route path='/Alunos' element={<Alunos/>} />
            <Route path='/Biblioteca' element={<Biblioteca/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
          </Routes>
        </main>

        <Footer/>

      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
