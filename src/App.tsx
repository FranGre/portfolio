import reactLogo from './assets/react.svg'
import vueLogo from '/vue.svg'
import laravelLogo from '/laravel.svg'
import wordpressLogo from '/wordpress.svg'
import prestashopLogo from '/prestashop.svg'
import sassLogo from '/sass.svg'
import cssLogo from '/css.svg'
import jsLogo from '/js.svg'
import tsLogo from '/ts.svg'
import phpLogo from '/php.svg'
import javaLogo from '/java.svg'
import htmlLogo from '/html.svg'
import gitLogo from '/git.svg'
import dockerLogo from '/docker.svg'
import linuxLogo from '/linux.svg'
import vscodeLogo from '/vscode.svg'
import phpstormLogo from '/phpstorm.svg'
import intellijideaLogo from '/intellijidea.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  return (
    <>
      <h1>Fran Gregori Tandazo</h1>

      <div>
        <h2>Conocimientos</h2>
        <a target="_blank">
          <img src={vueLogo} className="logo vue" alt="Vue logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src={laravelLogo} className="logo laravel" alt="Laravel logo" />
        </a>
        <a target="_blank">
          <img src={wordpressLogo} className="logo wordpress" alt="WordPress logo" />
        </a>
        <a target="_blank">
          <img src={prestashopLogo} className="logo prestashop" alt="PrestaShop logo" />
        </a>
        <a target="_blank">
          <img src={cssLogo} className="logo css" alt="CSS logo" />
        </a>
        <a target="_blank">
          <img src={sassLogo} className="logo sass" alt="SASS logo" />
        </a>
        <a target="_blank">
          <img src={jsLogo} className="logo js" alt="JavaScript logo" />
        </a>
        <a target="_blank">
          <img src={tsLogo} className="logo ts" alt="TypeScript logo" />
        </a>
        <a target="_blank">
          <img src={phpLogo} className="logo php" alt="PHP logo" />
        </a>
        <a target="_blank">
          <img src={javaLogo} className="logo java" alt="Java logo" />
        </a>
        <a target="_blank">
          <img src={htmlLogo} className="logo html" alt="HTML logo" />
        </a>
        <a target="_blank">
          <img src={gitLogo} className="logo git" alt="Git logo" />
        </a>
        <a target="_blank">
          <img src={dockerLogo} className="logo docker" alt="Docker logo" />
        </a>
        <a target="_blank">
          <img src={linuxLogo} className="logo linux" alt="Linux logo" />
        </a>
        <a target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={vscodeLogo} className="logo vscode" alt="VSCode logo" />
        </a>
        <a target="_blank">
          <img src={phpstormLogo} className="logo phpstorm" alt="PhpStorm logo" />
        </a>
        <a target="_blank">
          <img src={intellijideaLogo} className="logo intellijidea" alt="IntellijIdea logo" />
        </a>

      </div>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
