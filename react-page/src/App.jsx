import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Sidebar} from './components/Sidebar';
import {Contactos} from './components/Contactos';
import {Editor} from './components/Editor';
import {Enviar} from './components/Enviar';
import {Inicio} from './components/Inicio';

function App() {
  return (
    <div>
      
      
      
      <div class="parent">
        <div class="div1"> <Sidebar></Sidebar> 
        </div>

        <div class="div2"> 
          <BrowserRouter>
            <Routes>
              <Route path="/Inicio" element={<Inicio />}></Route>
              <Route path="/Editor" element={<Editor />}></Route>
              <Route path="/Contactos" element={<Contactos />}></Route>
              <Route path="/Enviar" element={<Enviar />}></Route>
            </Routes>
          </BrowserRouter> 
        </div>
      </div>
    </div>
  );
}

export default App;
