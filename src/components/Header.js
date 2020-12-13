// import {useDarkMode} from '../hooks';
import {logo} from '../assets/svg';

function Header() {
  // const [theme, toggleTheme] = useDarkMode();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img alt="Multi color" src={logo} height="48" />
            </a>
          </li>
          <li>Theme toggle button</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
