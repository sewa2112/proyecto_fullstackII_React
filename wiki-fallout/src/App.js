import './index.css';
import Login from './componentes/Login';
import ContenidoEditable from './componentes/ContenidoEditable';
import PanelUsuarios from './componentes/PanelUsuarios'; 
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

            
            {usuario && <li><a href="#panel-usuarios">Usuarios</a></li>}

            
            <li><Login setUsuario={setUsuario} usuario={usuario}/></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <img src="/Fallout.png" alt="Logo de Fallout" />
          <p>
            Fallout es una serie de videojuegos de rol y acción postapocalípticos creada por Interplay Entertainment.
            La serie se desarrolla en un futuro alternativo donde la tecnología y la cultura se han estancado en los años 1950,
            pero el mundo ha sido devastado por una guerra nuclear.
          </p>
        </section>

        <section id="historia">
          <h2>Historia de la saga</h2>
          <img src="/img/vaultboy1.png" alt="Historia de Fallout" />
          <ContenidoEditable
            textoInicial="Fallout es una saga ambientada en un futuro postnuclear..."
            puedeEditar={!!usuario}
          />
        </section>

        <section id="juegos">
          <h2>Juegos principales</h2>
          <img src="/img/vaultboy2.png" alt="Juegos de Fallout" />
          <ul>
            <li>Fallout (1997)</li>
            <li>Fallout 2 (1998)</li>
            <li>Fallout 3 (2008)</li>
            <li>Fallout: New Vegas (2010)</li>
            <li>Fallout 4 (2015)</li>
            <li>Fallout 76 (2018)</li>
          </ul>
        </section>

        <section id="facciones">
          <h2>Facciones importantes</h2>
          <img src="/img/vaultboy3.png" alt="Facciones" />
          <ContenidoEditable
            textoInicial="En Fallout, las facciones juegan un papel esencial..."
            puedeEditar={!!usuario}
          />
          <ul>
            <li>Hermandad del Acero</li>
            <li>El Enclave</li>
            <li>NCR</li>
          </ul>
        </section>

        <section id="curiosidades">
          <h2>Curiosidades</h2>
          <img src="/img/vaultboy4.png" alt="Curiosidades" />
          <ContenidoEditable
            textoInicial="War... War never changes..."
            puedeEditar={!!usuario}
          />
        </section>

        <section id="criaturas">
          <h2>Criaturas del Yermo</h2>
          <img src="/img/vaultboy5.png" alt="Criaturas" />
          <ContenidoEditable
            textoInicial="El mundo devastado de Fallout está poblado por criaturas mutantes..."
            puedeEditar={!!usuario}
          />
          <ul>
            <li>Sanguinarios</li>
            <li>Supermutantes</li>
            <li>Necrófagos</li>
          </ul>
        </section>

        <section id="armas">
          <h2>Armas icónicas</h2>
          <img src="/img/vaultboy6.png" alt="Armas" />
          <ContenidoEditable
            textoInicial="La saga está llena de armas memorables:"
            puedeEditar={!!usuario}
          />
          <ul>
            <li>Fat Man</li>
            <li>Pistola 10mm</li>
            <li>Rifle de plasma</li>
            <li>Pistola láser</li>
          </ul>
        </section>

        <section id="personajes">
          <h2>Personajes memorables</h2>
          <img src="/img/vaultboy7.png" alt="Personajes" />
          <ContenidoEditable
            textoInicial="En esta saga varios personajes han dejado huella..."
            puedeEditar={!!usuario}
          />
          <ul>
            <li>Vault Boy</li>
            <li>Mr. House</li>
            <li>Nick Valentine</li>
            <li>El único superviviente</li>
          </ul>
        </section>

        <section id="pipboy">
          <h2>El Pip-Boy</h2>
          <img src="/img/pip_boy.png" alt="Pip-Boy" />
          <ContenidoEditable
            textoInicial="El Pip-Boy es un dispositivo portátil..."
            puedeEditar={!!usuario}
          />
        </section>

        {/* ============================
             PANEL DE USUARIOS (CRUD)
        =============================== */}

        {usuario && (
          <section id="panel-usuarios">
            <h2>Gestión de Usuarios</h2>
            <PanelUsuarios />
          </section>
        )}

      </main>

      <footer>
        <p>&copy; Todos los derechos reservados para Interplay Entertainment y Bethesda</p>
      </footer>
    </div>
  );
}

export default App;
