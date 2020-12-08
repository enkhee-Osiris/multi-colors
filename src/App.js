// -*- mode: rjsx -*-

import {useDarkMode} from './hooks';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="App">
      <div>CURRENT THEME: {theme}</div>
      <button onClick={toggleTheme}>Click</button>
    </div>
  );
}

export default App;
