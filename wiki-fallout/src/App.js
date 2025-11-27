import './index.css';
import Login from './componentes/Login';
import ContenidoEditable from './componentes/ContenidoEditable';
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#historia">Historia</a></li>
            <li><a href="#juegos">Juegos</a></li>
            <li><a href="#facciones">Facciones</a></li>
            <li><a href="#curiosidades">Curiosidades</a></li>
            <li><a href="#criaturas">Criaturas</a></li>
            <li><a href="#armas">Armas</a></li>
            <li><a href="#personajes">Personajes</a></li>
            <li><a href="#pipboy">Pip-Boy</a></li>
            <li><Login setUsuario={setUsuario} usuario={usuario} /></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Inicio */}
        <section id="inicio">
          <img src="/Fallout.png" alt="Logo de Fallout" />
          <p>
            Fallout es una serie de videojuegos de rol...
          </p>
        </section>

        {/* Historia */}
        <section id="historia">
          <h2>Historia de la saga</h2>
          <img src="/img/vaultboy1.png" alt="Historia de Fallout" />
          <ContenidoEditable
            textoInicial="Fallout es una saga ambientada en un futuro postnuclear..."
            isLoggedIn={!!usuario}
          />
        </section>

        {/* Juegos */}
        <section id="juegos">
          <h2>Juegos principales</h2>
          <img src="/img/vaultboy2.png" alt="Historia de Fallout" />
          <ul>
            <li>Fallout (1997)</li>
            <li>Fallout 2 (1998)</li>
            <li>Fallout 3 (2008)</li>
            <li>Fallout: New Vegas (2010)</li>
            <li>Fallout 4 (2015)</li>
            <li>Fallout 76 (2018)</li>
          </ul>
        </section>

        {/* Facciones */}
        <section id="facciones">
          <h2>Facciones importantes</h2>
          <img src="/img/vaultboy3.png" alt="Facciones del Yermo" />
          <ContenidoEditable
            textoInicial="En Fallout, las facciones juegan un papel esencial..."
            isLoggedIn={!!usuario}
          />
          <ul>
            <li>Hermandad del Acero</li>
            <li>El Enclave</li>
            <li>NCR</li>
          </ul>
        </section>

        {/* Curiosidades */}
        <section id="curiosidades">
          <h2>Curiosidades</h2>
          <img src="/img/vaultboy4.png" alt="Curiosidades de Fallout" />
          <ContenidoEditable
            textoInicial="¿Sabías que el lema War never changes..."
            isLoggedIn={!!usuario}
          />
        </section>

        {/* Criaturas */}
        <section id="criaturas">
          <h2>Criaturas del Yermo</h2>
          <img src="/img/vaultboy5.png" alt="Criaturas del Yermo" />
          <ContenidoEditable
            textoInicial="El mundo devastado de Fallout está poblado..."
            isLoggedIn={!!usuario}
          />
          <ul>
            <li>Sanguinarios</li>
            <li>Supermutantes</li>
            <li>Necrófagos</li>
          </ul>
        </section>

        {/* Armas */}
        <section id="armas">
          <h2>Armas icónicas</h2>
          <img src="/img/vaultboy6.png" alt="Armas icónicas" />
          <ContenidoEditable
            textoInicial="La saga está llena de armas memorables:"
            isLoggedIn={!!usuario}
          />
          <ul>
            <li>Fat Man</li>
            <li>Pistola 10mm</li>
            <li>Rifle de plasma</li>
          </ul>
        </section>

        {/* Personajes */}
        <section id="personajes">
          <h2>Personajes memorables</h2>
          <img src="/img/vaultboy7.png" alt="Personajes de Fallout" />
          <ContenidoEditable
            textoInicial="En esta saga varios personajes..."
            isLoggedIn={!!usuario}
          />
        </section>

        {/* Pip-Boy */}
        <section id="pipboy">
          <h2>El Pip-Boy</h2>
          <img src="/img/pip_boy.png" alt="Pip-Boy" />
          <ContenidoEditable
            textoInicial="El Pip-Boy es un dispositivo portátil..."
            isLoggedIn={!!usuario}
          />
        </section>
      </main>

      <footer>
        <p>&copy; Todos los derechos reservados para Interplay Entertainment y Bethesda</p>
      </footer>
    </div>
  );
}

export default App;
