import HomePage from './components/HomePage';
import { useEffect } from 'react';
import { useCallback } from "react";
import Particles from 'react-particles';
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import options from './components/LinkTriangles'
import Main from './components/Main';

function App() {
  useEffect(() => {
    document.title = 'Katal';
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);


  return (
    <div id="main-page">
      <div id="particles" style={{position: 'fixed', width: '100%', zIndex: '-1'}}>
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
      </div>
      <Main />
    </div>
  );
}

export default App;
