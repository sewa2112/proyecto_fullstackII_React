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
            <li><Login setUsuario={setUsuario} usuario={usuario}/></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Sección Inicio */}
        <section id="inicio">
          <img src="/Fallout.png" alt="Logo de Fallout" />
          <p>
            Fallout es una serie de videojuegos de rol y acción postapocalípticos creada por Interplay Entertainment.
            La serie se desarrolla en un futuro alternativo donde la tecnología y la cultura se han estancado en los años 1950,
            pero el mundo ha sido devastado por una guerra nuclear.
          </p>
        </section>

        {/* Historia */}
        <section id="historia">
          <h2>Historia de la saga</h2>
          <img src="/img/vaultboy1.png" alt="Historia de Fallout" />
           <ContenidoEditable
            textoInicial="Fallout es una saga ambientada en un futuro postnuclear..."
            puedeEditar={!!usuario}
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
            textoInicial="En Fallout, las facciones juegan un papel esencial en el desarrollo de la historia. Algunas de las más conocidas son:"
            puedeEditar={!!usuario}
          />
          <ul>
            <li>Hermandad del Acero</li>
            <li>El Enclave</li>
            <li>Nueva República de California (NCR)</li>
          </ul>
        </section>

        {/* Curiosidades */}
        <section id="curiosidades">
          <h2>Curiosidades</h2>
          <img src="/img/vaultboy4.png" alt="Historia de Fallout" />
          <ContenidoEditable
            textoInicial="¿Sabías que el famoso lemaWar... War never changes aparece en casi todos los juegos de Fallout?
            Además, la saga está llena de referencias a la cultura pop, desde películas clásicas hasta cómics retro."
            puedeEditar={!!usuario}
          />
        </section>

        {/* Criaturas */}
        <section id="criaturas">
          <h2>Criaturas del Yermo</h2>
          <img src="/img/vaultboy5.png" alt="Criaturas del Yermo" />
          <ContenidoEditable
            textoInicial="El mundo devastado de Fallout está poblado por peligrosas criaturas mutantes:"
            puedeEditar={!!usuario}/>
          <ul>
            <li><strong>Sanguinarios:</strong> enormes bestias reptilianas, casi imposibles de derrotar sin preparación.</li>
            <li><strong>Supermutantes:</strong> humanos alterados por el FEV, fuertes y hostiles.</li>
            <li><strong>Necrófagos:</strong> humanos irradiados, algunos hostiles y otros aún cuerdos.</li>
          </ul>
        </section>

        {/* Armas */}
        <section id="armas">
          <h2>Armas icónicas</h2>
          <img src="/img/vaultboy6.png" alt="Armas icónicas de Fallout" />
          <ContenidoEditable
            textoInicial="La saga está llena de armas memorables:"
            puedeEditar={!!usuario}
          />
          <ul>
            <li><strong>Fat Man:</strong> un lanzador de mini bombas nucleares.</li>
            <li><strong>Pistola 10mm:</strong> una de las más comunes y confiables.</li>
            <li><strong>Rifle de plasma:</strong> arma de energía devastadora.</li>
            <li><strong>Pistola láser:</strong> símbolo del retrofuturismo de Fallout.</li>
          </ul>
        </section>

        {/* Personajes */}
        <section id="personajes">
          <h2>Personajes memorables</h2>
          <img src="/img/vaultboy7.png" alt="Personajes de Fallout" />
          <ContenidoEditable
            textoInicial="En esta saga, varios personajes han dejado una huella imborrable en los jugadores, conoce a algunos como:"
            puedeEditar={!!usuario}
          />
          <ul>
            <li><strong>Vault Boy:</strong> la icónica mascota sonriente de la saga.</li>
            <li><strong>Mr. House:</strong> el visionario empresario que controla New Vegas.</li>
            <li><strong>Nick Valentine:</strong> un detective synth con gran corazón.</li>
            <li><strong>El único superviviente:</strong> protagonista de Fallout 4.</li>
          </ul>
        </section>

        {/* Pip-Boy */}
        <section id="pipboy">
          <h2>El Pip-Boy</h2>
          <img src="/img/pip_boy.png" alt="Dispositivo Pip-Boy" />
          <ContenidoEditable
            textoInicial="El Pip-Boy o Procesador De Información Personal, es un dispositivo portátil que todo habitante de un refugio lleva en su brazo.
            Permite administrar inventario, ver mapas, gestionar la salud y acceder a la famosa pantalla S.P.E.C.I.A.L.
            Se ha convertido en uno de los símbolos más reconocidos de la franquicia."
            puedeEditar={!!usuario}
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
