import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

function App() {
  const node = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles open={open} />
        <div className="container">
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <div>
            <a href="/"><img src="/rh-logo.svg" alt="rh-logo" /></a>
          </div>
          <div>
            <img src="/bag.svg" alt="bag" />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
