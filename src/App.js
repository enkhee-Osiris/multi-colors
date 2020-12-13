// -*- mode: rjsx -*-
import {useState} from 'react';
import {Header, ColorEditor, ColorBox} from './components';

function App() {
  const [colors, setColors] = useState([]);

  const handleColors = colors => {
    setColors(colors);
  };

  return (
    <>
      <Header />
      <main>
        <ColorEditor onColors={handleColors} />
        <ColorBox colors={colors} />
      </main>
    </>
  );
}

export default App;
